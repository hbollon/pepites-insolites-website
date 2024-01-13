<template>
  <div>
    <SubpageLanding
      :breadcrumbs="breadcrumbs"
      :title="title"
      :text="text"
    />
    <FAQPanel :faq-items="faqItems" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useI18n } from 'vue-i18n'
import SubpageLanding from "@/components/sections/SubpageLanding.vue";
import FAQPanel from "@/components/faq/FAQPanel.vue";
import { FAQItem } from "@/components/faq/FAQPanel.vue";

export default defineComponent({
  name: "Offers",
  components: {
    SubpageLanding,
    FAQPanel
  },

  setup() {
    const { t } = useI18n({ useScope: 'global' })
    const backgroundImage = ref<string>('home/house-front.svg')

    const breadcrumbs = computed(() => [
      {
        id: 1,
        route: "offers",
        title: t("nav.offers.main"),
        isLast: true,
      }
    ])

    const title = computed<string>(() => t("offers.title"))
    const text = computed<string>(() => t("offers.text"))
    const test = computed<string>(() => t("offers.locations.0.rules"))
    console.log(test)
    const faqItems: FAQItem[] = JSON.parse(t("offers.locations[0].title"))
    console.log(faqItems)
    
    // let faqItems = ref<typeof FAQItem[]>([])
    // db.collection('faq').where("category", "==", "faq").get().then(querySnapshot => {
    //   querySnapshot.forEach(doc => {
    //     const data = {
    //       id: doc.id,
    //       category: doc.data().category,
    //       question: doc.data().question,
    //       answer: doc.data().answer,
    //     }
    //     faqItems.value.push(data)
    //   })
    // })

    return {
      backgroundImage,
      breadcrumbs,
      title,
      text,
      faqItems
    }
  }
});
</script>
