import Footer from "@/components/FooterComponent/Footer";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "مشاريعنا | تمديدات الخليج المبتكرة",
  description: "استعرض بعض مشاريع تمديدات الخليج الناجحة في التصميم والتركيب والصيانة لأنظمة الغاز.",
};

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-6 pt-28 pb-16" dir="rtl">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">مشاريعنا</h1>
        <p className="text-lg text-gray-700 mb-10">
          هنا بعض المشاريع التي نفذناها في السعودية، والتي تعكس خبرتنا في تصميم وتركيب
          وصيانة أنظمة الغاز السكنية والتجارية والصناعية.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-3">
        <article className="rounded-3xl bg-[#F2F2F2] p-6 shadow-lg">
          <div className="relative h-64 mb-4 rounded-3xl overflow-hidden">
            <Image
              src="/assets/projects/project1.jpg"
              alt="مشروع مجمع سكني في الرياض"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h2 className="text-xl font-semibold mb-3">مجمع سكني في الرياض</h2>
          <p className="text-gray-700 leading-7">
            تصميم وتنفيذ شبكة غاز متكاملة لمجمع سكني يضم 100 وحدة سكنية مع ضمان
            أعلى معايير السلامة والكفاءة.
          </p>
        </article>

        <article className="rounded-3xl bg-[#F2F2F2] p-6 shadow-lg">
          <div className="relative h-64 mb-4 rounded-3xl overflow-hidden">
            <Image
              src="/assets/projects/project2.jpg"
              alt="مشروع مجمع تجاري في جدة"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h2 className="text-xl font-semibold mb-3">مجمع تجاري في جدة</h2>
          <p className="text-gray-700 leading-7">
            تركيب شبكة غاز لمجمع مطاعم ومحلات تجارية مع حلول متقدمة لإدارة
            التوزيع والأمان.
          </p>
        </article>

        <article className="rounded-3xl bg-[#F2F2F2] p-6 shadow-lg">
          <div className="relative h-64 mb-4 rounded-3xl overflow-hidden">
            <Image
              src="/assets/projects/project3.jpg"
              alt="مشروع مصنع في الدمام"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <h2 className="text-xl font-semibold mb-3">مصنع في الدمام</h2>
          <p className="text-gray-700 leading-7">
            تصميم وتنفيذ شبكة غاز صناعية لمصنع كبير، مع تركيز خاص على السلامة
            والامتثال للمعايير المحلية.
          </p>
        </article>
      </section>

      <section className="mt-16 text-center">
        <p className="text-base text-gray-600 max-w-3xl mx-auto leading-8">
          إذا كنت ترغب في عرض مشروعك القادم، تواصل معنا لنضع معاً خطة تنفيذ
          آمنة ومهنية لحلول الغاز.
        </p>
      </section>

      <Footer />
    </main>
  );
}
