<template>
  <a4-page class="break-inside break-after h-full">
    <info :info="InfoData" :accountDetail="AccountDetailData"></info>
    <account-detail :accountDetail="AccountDetailData"></account-detail>
    <bill :bill="billData" class="absolute bottom-0"></bill>
  </a4-page>
</template>

<script>
import A4Page from "@/layout/A4Page.vue";
import tableDemoData from "@/assets/data/tableDemo.json";
import Info from "@/views/Info.vue";
import InfoData from "@/assets/data/InfoData.json";
import AccountDetail from "@/views/AccountDetail.vue";
import AccountDetailData from "@/assets/data/tableDemo.json";
import Bill from "@/components/Bill.vue";
import BillData from "@/assets/data/BillData.json";

export default {
  components: {
    Info,
    AccountDetail,
    A4Page,
    Bill
  },
  data() {
    return {
      tableDemoData,
      InfoData,
      AccountDetailData,
      pagedScript: undefined,
      hookScript: undefined,
      billData: BillData
    };
  },

  unmounted() {
    document.head.removeChild(this.pagedScript);
    document.head.removeChild(this.hookScript);
  },
  created() {
    this.pagedScript = document.createElement("script");
    this.pagedScript.src = "https://unpkg.com/pagedjs/dist/paged.polyfill.js";

    this.hookScript = document.createElement("script");
    this.hookScript.innerHTML = `

    class RepeatingTableHeaders extends Paged.Handler {
        constructor(chunker, polisher, caller) {
          super(chunker, polisher, caller);
        }

        afterPageLayout(pageElement, page, breakToken, chunker) {
          // Find all split table elements
          const tables = pageElement.querySelectorAll('table[data-split-from]');

          tables.forEach((table) => {
            // There is an edge case where the previous page table
            // has zero height (isn't visible).
            // To avoid double header we will only add header if there is none.
            let tableHeader = table.querySelector('thead');
            if (tableHeader) return;

            // Get the reference UUID of the node
            let ref = table.dataset.ref;
            // Find the node in the original source
            let sourceTable = chunker.source.querySelector(
              "[data-ref='" + ref + "']"
            );

            // Find if there is a header
            let sourceHeader = sourceTable.querySelector('thead');
            if (sourceHeader) {
              console.log('Table header was cloned, because it is splitted.');
              // Clone the header element
              let clonedHeader = sourceHeader.cloneNode(true);
              // Insert the header at the start of the split table
              table.insertBefore(clonedHeader, table.firstChild);
            }
          });
        }
      }
      Paged.registerHandlers(RepeatingTableHeaders);

    
    `;
    document.head.appendChild(this.pagedScript);
  },
  async mounted() {
    window.PagedConfig = {
      auto: false,
      before: () => {
        document.head.appendChild(this.hookScript);
      },
      after: () => {
        setTimeout(() => {
          window.PagedPolyfill.preview();
        }, 1000);
      }
    };
  }
};
</script>
