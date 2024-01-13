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
  name: "FAQ",
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
        route: "faq",
        title: t("nav.faq"),
        isLast: true,
      }
    ])

    const title = computed<string>(() => t("faq.title"))
    const text = computed<string>(() => t("faq.text"))
    const faqItems = ref<FAQItem[]>([
      {
        id: "1",
        category: "1",
        question: "Question 1",
        answer: "Answer 1",
      },
      {
        id: "2",
        category: "1",
        question: "Question 2",
        answer: "Answer 2",
      },
      {
        id: "3",
        category: "2",
        question: "Question 3",
        answer: "Answer 3",
      },
      {
        id: "4",
        category: "2",
        question: "Question 4",
        answer: "Answer 4",
      },
      {
        id: "5",
        category: "3",
        question: "Question 5",
        answer: "Answer 5",
      },
      {
        id: "6",
        category: "3",
        question: "Question 6",
        answer: "Answer 6",
      },
    ])
    
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
