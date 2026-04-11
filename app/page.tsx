"use client";

import Image from "next/image";
import { useState } from "react";

// ==========================================
// 저자 정보 - 여기를 수정하세요!
// ==========================================
const AUTHORS = [
  {
    name: "Hyehyun Chu",
    image: "/images/authors/hyehyun.png",
    website: "https://hyehyunchu.vercel.app",
    affiliation: "KAIST",
    affiliationShort: "KAIST",
  },
  {
    name: "Seungju Kim",
    image: "/images/authors/seungju.jpeg",
    website: "",
    affiliation: "KAIST",
    affiliationShort: "KAIST",
  },
  {
    name: "Chen Zhou",
    image: "/images/authors/chenzhou.png",
    website: "",
    affiliation: "National University of Singapore",
    affiliationShort: "NUS",
  },
  {
    name: "Yu-Kai Hung",
    image: "/images/authors/yukaihung.jpg",
    website: "",
    affiliation: "National Taiwan University",
    affiliationShort: "NTU",
  },
  {
    name: "Saelyne Yang",
    image: "/images/authors/saelyne.jpg",
    website: "https://saelyne.com",
    affiliation: "KAIST",
    affiliationShort: "KAIST",
  },
  {
    name: "Hyun W. Ka",
    image: "/images/authors/hyunwookka.jpeg",
    website: "",
    affiliation: "KAIST",
    affiliationShort: "KAIST",
  },
  {
    name: "Juho Kim",
    image: "/images/authors/juhokim.jpg",
    website: "https://juhokim.com",
    affiliation: "KAIST",
    affiliationShort: "KAIST",
  },
];

const BIBTEX = `@article{chu2026icantkeepup,
  title={"I Can't Keep Up": Accessibility Barriers in Video-Based Learning for Individuals with Borderline Intellectual Functioning},
  author={Hyehyun Chu and Seungju Kim and Chen Zhou and Yu-Kai Hung and Saelyne Yang and Hyun W. Ka and Juho Kim},
  year={2026},
  eprint={2602.08300},
  archivePrefix={arXiv},
  primaryClass={cs.HC},
  url={https://arxiv.org/abs/2602.08300},
}`;

export default function Home() {
  const [activeMisalignment, setActiveMisalignment] = useState<
    "spatial" | "verbal" | "working" | "inferential"
  >("spatial");
  const [hasCopiedBibtex, setHasCopiedBibtex] = useState(false);
  const [openDeepDive, setOpenDeepDive] = useState<string | null>(null);

  const handleCopyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(BIBTEX);
      setHasCopiedBibtex(true);
      setTimeout(() => setHasCopiedBibtex(false), 2000);
    } catch {
      setHasCopiedBibtex(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8">
        <div className="text-center">
          <div className="mb-8 flex flex-col items-center gap-4">
            <Image
              src="/images/CHI_logo.png"
              alt="CHI 2026"
              width={120}
              height={60}
              className="h-16 w-auto object-contain"
            />
            <span className="inline-block px-4 py-2 text-sm font-medium text-[#319AE0] bg-[#EFF8FE] rounded-full">
              CHI 2026 • Barcelona, Spain • April 13-17, 2026
            </span>
          </div>
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">
            ``I Can&apos;t Keep Up'': Accessibility Barriers in Video-Based
            Learning for <br />
            Individuals with Borderline Intellectual Functioning
          </h1>

          {/* Authors with Photos */}
          <div className="mt-16">
            <div className="flex flex-wrap justify-center gap-8">
              {AUTHORS.map((author, index) => {
                // Determine affiliation marker
                let marker = "¹";
                if (author.affiliationShort === "NUS") marker = "²";
                else if (author.affiliationShort === "NTU") marker = "³";

                return (
                  <div key={index} className="flex flex-col items-center w-28">
                    {author.website ? (
                      <a
                        href={author.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center"
                      >
                        <div className="relative w-24 h-24 mb-3 overflow-hidden bg-gray-200 rounded-full ring-2 ring-gray-300 group-hover:ring-[#319AE0] transition-all">
                          <Image
                            src={author.image}
                            alt={author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-base font-light text-gray-900 group-hover:text-[#319AE0] transition-colors text-center">
                          {author.name}
                          <sup className="ml-0.5">{marker}</sup>
                        </div>
                      </a>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="relative w-24 h-24 mb-3 overflow-hidden bg-gray-200 rounded-full ring-2 ring-gray-300">
                          <Image
                            src={author.image}
                            alt={author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-base font-light text-gray-900 text-center">
                          {author.name}
                          <sup className="ml-0.5">{marker}</sup>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Affiliation Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
              <div>
                <sup>¹</sup> KAIST
              </div>
              <div>
                <sup>²</sup> NUS
              </div>
              <div>
                <sup>³</sup> NTU
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center mt-12 gap-x-6">
            <a
              href="https://arxiv.org/abs/2602.08300"
              className="flex items-center gap-2 rounded-xl bg-[#319AE0] px-6 py-3 text-sm font-light text-white shadow-md hover:shadow-lg hover:bg-[#2a86c9] transform hover:-translate-y-0.5 transition-all border-2 border-dashed border-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/arxiv_logo.svg"
                alt="arXiv preprint"
                width={20}
                height={20}
                className="w-5 h-5 object-contain"
              />
              Read Paper
            </a>
            <a
              href="#bibtex"
              className="rounded-xl bg-white px-6 py-3 text-sm font-light text-gray-800 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all border-2 border-dashed border-gray-400"
            >
              Cite (BibTeX)
            </a>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <svg
            className="w-full h-4"
            viewBox="0 0 1200 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q 300 2, 600 10 T 1200 10"
              stroke="#E5E7EB"
              strokeWidth="3"
              strokeDasharray="10,5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Abstract Section */}
      <section id="abstract" className="px-6 py-12 mx-auto max-w-7xl lg:px-8">
        <div className="overflow-hidden bg-white shadow-lg rounded-2xl border-2 border-dashed border-gray-300">
          <div className="px-8 py-12">
            <h2 className="text-3xl font-medium text-gray-900">Abstract</h2>
            <div className="mt-6 space-y-4 text-lg leading-8 text-gray-700">
              <p>
                Video-based learning (VBL) has become a dominant method for
                learning practical skills, yet accessibility guidelines provide
                limited guidance for users with cognitive differences. In
                particular, challenges that individuals with{" "}
                <strong>Borderline Intellectual Functioning (BIF)</strong>{" "}
                encounter in video-based learning remain largely underexplored,
                despite VBL&apos;s potential to support their learning through
                features like self-paced viewing and visual demonstration.
              </p>
              <p>
                To address this gap, we conducted a series of studies with BIF
                individuals and caretakers to comprehensively understand their
                VBL challenges. Our analysis revealed challenges stemming from{" "}
                <strong>
                  misalignment between user cognitive characteristics and video
                  elements
                </strong>{" "}
                (e.g., overwhelmed by pacing and density, difficulty inferring
                omitted content), and <strong>experiential factors</strong>{" "}
                intensifying challenges (e.g., low self-efficacy).
              </p>
              <p>
                While participants employed coping strategies such as repetitive
                viewing to address these challenges, these strategies could not
                overcome fundamental gaps with video. We further discuss the
                design implications on both content and UI-level features for
                BIF and broader groups with cognitive diversities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <svg
            className="w-full h-4"
            viewBox="0 0 1200 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q 300 18, 600 10 T 1200 10"
              stroke="#E5E7EB"
              strokeWidth="3"
              strokeDasharray="10,5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Methodology Section */}
      <section
        id="methodology"
        className="px-6 py-12 mx-auto max-w-7xl lg:px-8"
      >
        <h2 className="text-3xl font-medium text-center text-gray-900">
          Methodology
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Multi-method study combining interviews and observational research
        </p>

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {/* Study 1 */}
          <div className="p-8 bg-white border-2 border-dashed border-[#4B8857]/30 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-[#4B8857] rounded-lg shadow-md transform rotate-2">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="ml-4 text-xl font-medium text-gray-900">
                Interviews with Caregivers
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-[#4B8857]">•</span>2 social workers
                with 8-17 years of experience
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#4B8857]">•</span>4 parents of BIF
                individuals
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#4B8857]">•</span>
                Understanding broader context of VBL challenges
              </li>
            </ul>
          </div>

          {/* Study 2 */}
          <div className="p-8 bg-white border-2 border-dashed border-[#319AE0]/30 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-[#319AE0] rounded-lg shadow-md transform -rotate-1">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="ml-4 text-xl font-medium text-gray-900">
                Study with BIF Users
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-[#319AE0]">•</span>
                12 BIF individuals (aged 23-33, IQ 64-82)
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#319AE0]">•</span>
                Semi-structured interviews about VBL experiences
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#319AE0]">•</span>
                Observational video-watching with AED tutorial
              </li>
            </ul>
          </div>
        </div>

        {/* Methodology Image */}
        <div className="mt-12">
          <div className="overflow-hidden bg-white shadow-lg rounded-xl border-2 border-dashed border-gray-300">
            <Image
              src="/images/Methodology.png"
              alt="Study Methodology"
              width={1200}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <svg
            className="w-full h-4"
            viewBox="0 0 1200 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q 300 2, 600 10 T 1200 10"
              stroke="#E5E7EB"
              strokeWidth="3"
              strokeDasharray="10,5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Key Findings Section - Journey-Based */}
      <section id="findings" className="px-6 py-12 mx-auto max-w-7xl lg:px-8">
        <h2 className="text-3xl font-medium text-center text-gray-900">
          Key Findings
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          The learning journey: Understanding accessibility barriers step by
          step
        </p>
        <p className="mt-2 text-base text-center text-gray-500 italic">
          This journey represents a composite scenario synthesized from
          observations of multiple BIF individuals
        </p>

        {/* Background Section - 2 Column Grid */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-2xl overflow-hidden border-2 border-dashed border-[#319AE0]/30">
            {/* Image - Left */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-8">
              <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">
                    Person with tablet in dimly lit room
                  </p>
                  <p className="text-xs mt-1">Aspect Ratio: 4:3</p>
                </div>
              </div>
            </div>
            {/* Content - Right */}
            <div className="px-8 py-10">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">🛡️</span>
                <h3 className="text-2xl font-medium text-gray-900">
                  Background: The Retreat to Video as a Social Refuge
                </h3>
              </div>
              <p className="text-base leading-7 text-gray-700 mb-6">
                For individuals with Borderline Intellectual Functioning (BIF),
                the real world often moves too fast. They exist in a &apos;gray
                area,&apos; cognitively different enough to struggle in
                neurotypical settings but excluded from specialized support
                systems reserved for diagnosed disabilities. BIF users often
                retreat to video-based learning (VBL) as a refuge to escape the
                social anxiety and pressure of face-to-face learning
                environments.
              </p>
              <blockquote className="border-l-4 border-[#319AE0] pl-4 py-2 bg-blue-50 rounded-r">
                <p className="text-base italic text-gray-700">
                  &quot;There aren&apos;t many people who can wait for us.&quot;
                </p>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Journey Steps */}
        <div className="mt-12 space-y-8">
          <h3 className="text-2xl font-medium text-center text-gray-900 mb-8">
            The Learning Journey: Seven Accessibility Barriers
          </h3>

          {/* Step 1: Common Sense Language - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl overflow-hidden border-2 border-dashed border-[#4B8857]/30">
            {/* Content - Left */}
            <div className="px-8 py-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#4B8857] text-white rounded-lg font-bold text-xl shadow-md transform rotate-1">
                  1
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-gray-900">
                    The Barrier of &apos;Common Sense&apos; Language
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 font-light">
                    Verbal Comprehension Misalignment
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                What content creators perceive as entry-level &apos;common
                sense&apos; vocabulary often functions as technical jargon for
                BIF learners. This fundamental mismatch between concrete
                thinking patterns and abstract language creates immediate
                comprehension barriers.
              </p>
              <blockquote className="border-l-4 border-[#4B8857] pl-4 py-2 bg-green-50 rounded-r">
                <p className="text-base italic text-gray-700">
                  &quot;During safety training, there were too many unfamiliar
                  words... medical terms... like airway intubation...&quot;
                </p>
              </blockquote>
            </div>
            {/* Image - Right */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center p-8">
              <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">
                    Words forming a wall barrier
                  </p>
                  <p className="text-xs mt-1">4:3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Video Racing Ahead - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl overflow-hidden border-2 border-dashed border-[#319AE0]/30">
            {/* Image - Left */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-8 md:order-1">
              <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">
                    Clock spinning, speech bubbles piling
                  </p>
                  <p className="text-xs mt-1">4:3</p>
                </div>
              </div>
            </div>
            {/* Content - Right */}
            <div className="px-8 py-8 md:order-2">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#319AE0] text-white rounded-lg font-bold text-xl shadow-md transform -rotate-1">
                  2
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-gray-900">
                    &apos;The Video is Racing Ahead of Me&apos;
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 font-light">
                    Working Memory Constraints - Rapid Pacing & Density
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Information density spikes, such as rapid turn-taking with
                pauses under 0.5 seconds, create severe working memory overload.
                BIF users struggle to process and retain content when the video
                pace exceeds their processing capacity.
              </p>
              <blockquote className="border-l-4 border-[#319AE0] pl-4 py-2 bg-blue-50 rounded-r">
                <p className="text-base italic text-gray-700">
                  &quot;It is definitely a bit complicated. I don&apos;t
                  remember, the video went by too quickly.&quot;
                </p>
              </blockquote>
            </div>
          </div>

          {/* Step 3: Multi-modal Anchor - Content Left, Image Right */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl overflow-hidden border-2 border-dashed border-[#A6A62A]/30">
              {/* Content - Left */}
              <div className="px-8 py-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#A6A62A] text-white rounded-lg font-bold text-xl shadow-md transform -rotate-2">
                    3
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-gray-900">
                      The Multi-modal Anchor
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 font-light">
                      Working Memory Constraints - Single vs. Audio-Caption
                      Delivery
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Content presented through only one modality (audio-only or
                  visual-only) often fails to be processed. However, when audio
                  is paired with visual anchors like captions, comprehension
                  improves dramatically as the redundant channels reduce
                  cognitive load.
                </p>
                <blockquote className="border-l-4 border-[#A6A62A] pl-4 py-2 bg-yellow-50 rounded-r">
                  <p className="text-base italic text-gray-700">
                    &quot;I didn&apos;t hear it... I thought the sound from the
                    machine was the narrator&apos;s voice. It was subtitles... I
                    feel like I need something like a caption or a highlight to
                    emphasize that &apos;this is important right
                    now&apos;.&quot;
                  </p>
                </blockquote>
              </div>
              {/* Image - Right */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 flex items-center justify-center p-8">
                <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-16 h-16 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm font-medium">
                      Speaker icon with/without captions
                    </p>
                    <p className="text-xs mt-1">4:3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deep Dive 1: Uneven Abilities - Below Step 3 */}
            <div className="mt-8">
              <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-2xl overflow-hidden border-2 border-amber-200 shadow-lg">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDeepDive(openDeepDive === "uneven" ? null : "uneven")
                  }
                  className="w-full px-6 py-6 flex items-center justify-between hover:bg-amber-100/50 transition-all group"
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <span className="text-3xl mr-8 animate-pulse">💡</span>
                      <svg
                        className="absolute -top-1 -right-1 w-6 h-6 text-amber-400 animate-bounce"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-amber-900">
                        🔘 WHY IS THIS HAPPENING?
                      </h4>
                      <p className="text-base font-medium text-amber-800 mt-1">
                        The Trap of Uneven Abilities
                      </p>
                      <p className="text-sm text-amber-600 mt-1">
                        {openDeepDive === "uneven"
                          ? "Click to close"
                          : "Click to explore →"}
                      </p>
                    </div>
                  </div>
                  <svg
                    className={`w-8 h-8 text-amber-600 transition-transform duration-300 group-hover:scale-110 ${
                      openDeepDive === "uneven" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDeepDive === "uneven" && (
                  <div className="bg-white/80 border-t-2 border-amber-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                      {/* Image placeholder */}
                      <div className="bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center p-6 rounded-lg">
                        <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-gray-300">
                          <div className="text-center text-gray-500">
                            <svg
                              className="w-12 h-12 mx-auto mb-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="text-xs font-medium">
                              Jagged profile visualization
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex flex-col justify-center">
                        <p className="text-gray-700 leading-relaxed text-base">
                          BIF individuals often have a &apos;jagged cognitive
                          profile&apos; with significant intra-individual
                          variance. For example, they may perform &apos;above
                          normal&apos; in humanities while struggling deeply
                          with spatial or numerical tasks. This inconsistency
                          often leads observers to misinterpret their genuine
                          struggles as a lack of effort.
                        </p>
                        <div className="mt-4 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                          <p className="text-sm text-amber-800 italic">
                            💭 This creates a paradox: their visible competence
                            in some areas makes their invisible struggles in
                            others seem like &quot;not trying hard enough.&quot;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Step 4: 3D Puzzle - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl overflow-hidden border-2 border-dashed border-[#3d7048]/30">
            {/* Image - Left */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center p-8 md:order-1">
              <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">
                    2D paper on 3D mannequin confusion
                  </p>
                  <p className="text-xs mt-1">4:3</p>
                </div>
              </div>
            </div>
            {/* Content - Right */}
            <div className="px-8 py-8 md:order-2">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#3d7048] text-white rounded-lg font-bold text-xl shadow-md transform rotate-2">
                  4
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-gray-900">
                    The 3D Puzzle on a 2D Screen
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 font-light">
                    Spatial Perception Misalignment
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                BIF users often face significant challenges translating
                two-dimensional video demonstrations into three-dimensional
                physical actions. Angled camera perspectives and device
                rotations make spatial relationships difficult to discern
                clearly.
              </p>
              <blockquote className="border-l-4 border-[#3d7048] pl-4 py-2 bg-green-50 rounded-r">
                <p className="text-base italic text-gray-700">
                  &quot;I can understand it in my head, but when I actually try
                  to do it myself... my body just doesn&apos;t follow
                  along.&quot;
                </p>
              </blockquote>
            </div>
          </div>

          {/* Step 5: Mystery of Omitted Scene - Content Left, Image Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl overflow-hidden border-2 border-dashed border-[#8B4789]/30">
            {/* Content - Left */}
            <div className="px-8 py-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#8B4789] text-white rounded-lg font-bold text-xl shadow-md transform -rotate-2">
                  5
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-gray-900">
                    The Mystery of the Omitted Scene
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 font-light">
                    Inferential Reasoning Capability Misalignment
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Informational videos frequently omit intermediate steps,
                requiring viewers to make bridging inferences about causal
                relationships. For concrete thinkers, these gaps create
                comprehension barriers that repetition cannot overcome.
              </p>
              <blockquote className="border-l-4 border-[#8B4789] pl-4 py-2 bg-purple-50 rounded-r">
                <p className="text-base italic text-gray-700">
                  &quot;We can&apos;t really figure out what the specific
                  outcome is in the end... the story doesn&apos;t connect.&quot;
                </p>
              </blockquote>
            </div>
            {/* Image - Right */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-8">
              <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">Film strip with gap</p>
                  <p className="text-xs mt-1">4:3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6: Brute-Force Replay - Image Left, Content Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl overflow-hidden border-2 border-dashed border-[#D97706]/30">
            {/* Image - Left */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-8 md:order-1">
              <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500">
                  <svg
                    className="w-16 h-16 mx-auto mb-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm font-medium">
                    Replay button vs dusty speed control
                  </p>
                  <p className="text-xs mt-1">4:3</p>
                </div>
              </div>
            </div>
            {/* Content - Right */}
            <div className="px-8 py-8 md:order-2">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#D97706] text-white rounded-lg font-bold text-xl shadow-md transform rotate-1">
                  6
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-medium text-gray-900">
                    Brute-Force Replay vs. The Efficiency Paradox
                  </h4>
                  <p className="text-sm text-gray-600 mt-1 font-light">
                    Coping Strategies: Repetitive Viewing & Speed Control
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Users rely on repetitive viewing as a &apos;brute-force&apos;
                coping mechanism, which often leads to mental and physical
                fatigue without resolving the core barrier. Paradoxically, many
                avoid slowing down playback speeds to maintain a sense of
                normalcy and avoid the stigma of &apos;slowness&apos;.
              </p>
              <blockquote className="border-l-4 border-[#D97706] pl-4 py-2 bg-orange-50 rounded-r">
                <p className="text-base italic text-gray-700">
                  &quot;There were many things I could not understand even after
                  repeatedly replaying them. If you make it slower, it literally
                  becomes slower and takes too much time, so I&apos;ve never
                  used it.&quot;
                </p>
              </blockquote>
            </div>
          </div>

          {/* Step 7: Shadow of Self-Doubt - Content Left, Image Right */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-lg rounded-xl overflow-hidden border-2 border-dashed border-[#7C3AED]/30">
              {/* Content - Left */}
              <div className="px-8 py-8">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#7C3AED] text-white rounded-lg font-bold text-xl shadow-md transform rotate-2">
                    7
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-medium text-gray-900">
                      The Shadow of Self-Doubt
                    </h4>
                    <p className="text-sm text-gray-600 mt-1 font-light">
                      Negative Feedback Cycle and Internalized Inadequacy
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Years of accumulated learning gaps and negative social
                  feedback lead to low self-efficacy. This internalized
                  self-doubt often overrides objective success, causing users to
                  remain uncertain even when they provide correct answers.
                </p>
                <blockquote className="border-l-4 border-[#7C3AED] pl-4 py-2 bg-purple-50 rounded-r">
                  <p className="text-base italic text-gray-700">
                    &quot;While &apos;ordinary&apos; people can do it at that
                    speed, I&apos;m quite lacking and slow in that. I lost track
                    of it in my mind.&quot;
                  </p>
                </blockquote>
              </div>
              {/* Image - Right */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center p-8">
                <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center text-gray-500">
                    <svg
                      className="w-16 h-16 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-sm font-medium">
                      100/100 quiz, defeated reflection
                    </p>
                    <p className="text-xs mt-1">4:3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deep Dive 2: Negative Feedback Cycle - Below Step 7 */}
            <div className="mt-8">
              <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50 rounded-2xl overflow-hidden border-2 border-purple-200 shadow-lg">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDeepDive(
                      openDeepDive === "feedback" ? null : "feedback",
                    )
                  }
                  className="w-full px-6 py-6 flex items-center justify-between hover:bg-purple-100/50 transition-all group"
                >
                  <div className="flex items-center">
                    <div className="relative">
                      <span className="text-3xl mr-8 animate-pulse">💡</span>
                      <svg
                        className="absolute -top-1 -right-1 w-6 h-6 text-purple-400 animate-bounce"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg font-bold text-purple-900">
                        🔘 WHY IS THIS HAPPENING?
                      </h4>
                      <p className="text-base font-medium text-purple-800 mt-1">
                        The Negative Feedback Cycle
                      </p>
                      <p className="text-sm text-purple-600 mt-1">
                        {openDeepDive === "feedback"
                          ? "Click to close"
                          : "Click to explore →"}
                      </p>
                    </div>
                  </div>
                  <svg
                    className={`w-8 h-8 text-purple-600 transition-transform duration-300 group-hover:scale-110 ${
                      openDeepDive === "feedback" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openDeepDive === "feedback" && (
                  <div className="bg-white/80 border-t-2 border-purple-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                      {/* Image placeholder */}
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 flex items-center justify-center p-6 rounded-lg">
                        <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-inner flex items-center justify-center border-2 border-dashed border-gray-300">
                          <div className="text-center text-gray-500">
                            <svg
                              className="w-12 h-12 mx-auto mb-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                            <p className="text-xs font-medium">
                              Feedback cycle diagram
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Content */}
                      <div className="flex flex-col justify-center">
                        <p className="text-gray-700 leading-relaxed text-base">
                          BIF users often internalize universal design
                          challenges—like rapid video pacing—as personal
                          failures. This mindset erodes self-efficacy and
                          fosters &apos;learned helplessness,&apos; where users
                          become too afraid to utilize the very tools or
                          strategies that might help them.
                        </p>
                        <div className="mt-4 p-4 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
                          <p className="text-sm text-purple-800 italic">
                            💭 This creates a vicious cycle: design barriers →
                            internalized as personal failure → fear of using
                            helpful tools → continued struggle → reinforced
                            belief of inadequacy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <svg
            className="w-full h-4"
            viewBox="0 0 1200 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q 300 18, 600 10 T 1200 10"
              stroke="#E5E7EB"
              strokeWidth="3"
              strokeDasharray="10,5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Design Implications */}
      <section
        id="implications"
        className="px-6 py-12 mx-auto max-w-7xl lg:px-8"
      >
        <h2 className="text-3xl font-medium text-center text-gray-900">
          Design Implications
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Recommendations for BIF-inclusive video learning
        </p>

        <div className="grid gap-8 mt-12 lg:grid-cols-3">
          {/* Cognitive Load Reduction */}
          <div className="p-8 bg-white border-2 border-dashed border-[#4B8857]/30 shadow-lg rounded-xl">
            <h3 className="text-xl font-medium text-gray-900">
              Cognitive Load Reduction
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-[#4B8857]">✓</span>
                Use simpler language with interactive explanations
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#4B8857]">✓</span>
                Reduce visual density for improved clarity
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#4B8857]">✓</span>
                Balance information across multiple modalities
              </li>
            </ul>
          </div>

          {/* Scaffolding */}
          <div className="p-8 bg-white border-2 border-dashed border-[#319AE0]/30 shadow-lg rounded-xl">
            <h3 className="text-xl font-medium text-gray-900">
              Scaffolding & Progressive Disclosure
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-[#319AE0]">✓</span>
                Highlight important information with clear visual markers
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#319AE0]">✓</span>
                Break down knowledge into step-by-step guidance
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#319AE0]">✓</span>
                Support adaptive video segmentation
              </li>
            </ul>
          </div>

          {/* Self-Efficacy */}
          <div className="p-8 bg-white border-2 border-dashed border-[#A6A62A]/30 shadow-lg rounded-xl">
            <h3 className="text-xl font-medium text-gray-900">
              Fostering Self-Efficacy
            </h3>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-[#A6A62A]">✓</span>
                Emotional scaffolding through non-evaluative check-ins
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#A6A62A]">✓</span>
                Support non-verbal querying to lower help-seeking barriers
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#A6A62A]">✓</span>
                Personalization for strength-based learning
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Affiliations Section */}
      <section className="px-6 py-16 mx-auto max-w-7xl lg:px-8 border-t border-gray-200">
        <div className="text-center">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* KIXLAB */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-auto flex items-center justify-center">
                <Image
                  src="/images/kixlab_logo.png"
                  alt="KIXLAB"
                  width={60}
                  height={30}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* KAIST */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-auto flex items-center justify-center">
                <Image
                  src="/images/KAIST_logo.jpg"
                  alt="KAIST"
                  width={80}
                  height={40}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* NUS */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-auto flex items-center justify-center">
                <Image
                  src="/images/NUS_logo.jpg"
                  alt="National University of Singapore"
                  width={42}
                  height={42}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            {/* NTU */}
            <div className="flex flex-col items-center">
              <div className="h-12 w-auto flex items-center justify-center">
                <Image
                  src="/images/NTU_logo.svg"
                  alt="National Taiwan University"
                  width={42}
                  height={42}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative py-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <svg
            className="w-full h-4"
            viewBox="0 0 1200 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q 300 2, 600 10 T 1200 10"
              stroke="#E5E7EB"
              strokeWidth="3"
              strokeDasharray="10,5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* BibTeX Section */}
      <section id="bibtex" className="px-6 py-12 mx-auto max-w-7xl lg:px-8">
        <h2 className="text-3xl font-medium text-center text-gray-900">
          Citation
        </h2>
        <div className="p-6 mt-8 bg-gray-900 rounded-2xl border-2 border-dashed border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <span className="text-base font-medium text-gray-300">BibTeX</span>
            <button
              type="button"
              onClick={handleCopyBibtex}
              className="inline-flex items-center px-4 py-2 text-sm font-light text-gray-900 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all border-2 border-dashed border-gray-300"
            >
              {hasCopiedBibtex ? "✓ Copied!" : "📋 Copy"}
            </button>
          </div>
          <pre className="text-sm text-gray-100 whitespace-pre-wrap break-words font-mono">
            {BIBTEX}
          </pre>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative py-4 mt-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <svg
            className="w-full h-4"
            viewBox="0 0 1200 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q 300 18, 600 10 T 1200 10"
              stroke="#E5E7EB"
              strokeWidth="3"
              strokeDasharray="10,5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 py-8 mx-auto max-w-7xl lg:px-8">
        <div className="text-center text-gray-600">
          <p className="mt-2 text-sm">
            Contact:{" "}
            <a
              href="mailto:hyenchu@kaist.ac.kr"
              className="text-[#319AE0] hover:underline"
            >
              hyenchu@kaist.ac.kr
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
