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
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
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
              className="flex items-center gap-2 rounded-md bg-[#319AE0] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#2a86c9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#319AE0] transition-colors"
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
              Preprint
            </a>
            <a
              href="#bibtex"
              className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-colors"
            >
              Cite (BibTeX)
            </a>
          </div>
        </div>
      </section>

      {/* Abstract Section */}
      <section
        id="abstract"
        className="px-6 py-16 mx-auto max-w-5xl lg:px-8 bg-gray-50"
      >
        <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
          <div className="px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900">Abstract</h2>
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
                omitted content), and{" "} <strong>experiential factors</strong>{" "}
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

      {/* Methodology Section */}
      <section
        id="methodology"
        className="px-6 py-16 mx-auto max-w-5xl lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Methodology
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Multi-method study combining interviews and observational research
        </p>

        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {/* Study 1 */}
          <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-[#4B8857] rounded-lg">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
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
          <div className="p-8 bg-white border border-gray-200 rounded-xl shadow-sm">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 text-white bg-[#319AE0] rounded-lg">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="ml-4 text-xl font-semibold text-gray-900">
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
          <div className="overflow-hidden bg-white shadow-lg rounded-xl">
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

      {/* Key Findings Section - Restructured */}
      <section
        id="findings"
        className="px-6 py-16 mx-auto max-w-7xl lg:px-8 bg-gray-50"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Key Findings
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Understanding video-based learning challenges for BIF individuals
        </p>

        {/* RQ1: Misalignment */}
        <div className="mt-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              RQ1. Challenges from Cognitive-Video Misalignment
            </h3>
            <p className="mt-2 text-gray-600">
              Misalignment between user cognitive characteristics and video
              elements
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {/* Spatial Perception */}
            <button
              type="button"
              onClick={() => setActiveMisalignment("spatial")}
              className={`p-6 w-full text-left transition-shadow bg-white rounded-xl hover:shadow-lg border ${
                activeMisalignment === "spatial"
                  ? "border-[#319AE0] ring-2 ring-[#319AE0]"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 text-white bg-[#4B8857] rounded-lg">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Spatial Perception Misalignment
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Difficulty translating 2D video demonstrations into 3D
                    physical actions, especially with rotated camera angles
                  </p>
                </div>
              </div>
            </button>

            {/* Verbal Comprehension */}
            <button
              type="button"
              onClick={() => setActiveMisalignment("verbal")}
              className={`p-6 w-full text-left transition-shadow bg-white rounded-xl hover:shadow-lg border ${
                activeMisalignment === "verbal"
                  ? "border-[#319AE0] ring-2 ring-[#319AE0]"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 text-white bg-[#319AE0] rounded-lg">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Verbal Comprehension Challenges
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Struggling with technical jargon and abstract terminology
                    that creators assume as &quot;common knowledge&quot;
                  </p>
                </div>
              </div>
            </button>

            {/* Working Memory */}
            <button
              type="button"
              onClick={() => setActiveMisalignment("working")}
              className={`p-6 w-full text-left transition-shadow bg-white rounded-xl hover:shadow-lg border ${
                activeMisalignment === "working"
                  ? "border-[#319AE0] ring-2 ring-[#319AE0]"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 text-white bg-[#A6A62A] rounded-lg">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Working Memory Constraints
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Overwhelmed by rapid pacing, high information density, and
                    single-channel information delivery
                  </p>
                </div>
              </div>
            </button>

            {/* Inferential Reasoning */}
            <button
              type="button"
              onClick={() => setActiveMisalignment("inferential")}
              className={`p-6 w-full text-left transition-shadow bg-white rounded-xl hover:shadow-lg border ${
                activeMisalignment === "inferential"
                  ? "border-[#319AE0] ring-2 ring-[#319AE0]"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 text-white bg-[#3d7048] rounded-lg">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Inferential Reasoning Difficulties
                  </h4>
                  <p className="mt-2 text-gray-600">
                    Challenges extracting information from dialogue, connecting
                    omitted scenes, and interpreting visual symbols
                  </p>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop: detail area controlled by selection */}
          <div className="hidden mt-8 md:block">
            {activeMisalignment === "spatial" && (
              <div className="overflow-hidden bg-white shadow-lg rounded-xl">
                <Image
                  src="/images/CameraAngle_CamReady.png"
                  alt="Spatial perception challenges with camera angles"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <p className="text-sm text-center text-gray-600">
                    Spatial perception challenges with rotated camera angles
                  </p>
                </div>
              </div>
            )}

            {activeMisalignment === "verbal" && (
              <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                <p className="mb-2 text-sm font-semibold text-gray-900">
                  Participant quote on verbal comprehension:
                </p>
                <p className="text-sm italic text-gray-700">
                  &quot;Even when I replay the video, the difficult words still
                  feel like a wall. I can hear them, but I can&apos;t really
                  catch what they mean.&quot;
                </p>
              </div>
            )}

            {activeMisalignment === "working" && (
              <div className="overflow-hidden bg-white shadow-lg rounded-xl">
                <Image
                  src="/images/SingleChannel_CamReady.png"
                  alt="Working memory constraints and single-channel information delivery"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <p className="text-sm text-center text-gray-600">
                    Working memory constraints amplified by rapid, dense, and
                    single-channel information delivery
                  </p>
                </div>
              </div>
            )}

            {activeMisalignment === "inferential" && (
              <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                <p className="mb-2 text-sm font-semibold text-gray-900">
                  Example of inferential reasoning difficulty:
                </p>
                <p className="text-sm text-gray-700">
                  When key steps are skipped or implied, participants struggle
                  to fill in the gaps, making it difficult to connect scenes and
                  understand how actions in the video lead to real-world
                  outcomes.
                </p>
              </div>
            )}
          </div>

          {/* Mobile: show each figure or quote directly under topic */}
          <div className="mt-8 space-y-6 md:hidden">
            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              <Image
                src="/images/CameraAngle_CamReady.png"
                alt="Spatial perception challenges with camera angles"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Spatial Perception Misalignment
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Difficulty translating 2D demonstrations into 3D actions,
                  especially when camera angles are rotated.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
              <p className="text-sm font-semibold text-gray-900">
                Verbal Comprehension Challenges
              </p>
              <p className="mt-2 text-sm italic text-gray-700">
                &quot;Even when I replay the video, the difficult words still
                feel like a wall. I can hear them, but I can&apos;t really
                catch what they mean.&quot;
              </p>
            </div>

            <div className="overflow-hidden bg-white shadow-lg rounded-xl">
              <Image
                src="/images/SingleChannel_CamReady.png"
                alt="Working memory constraints and single-channel information delivery"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-gray-900">
                  Working Memory Constraints
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Overwhelmed by rapid pacing and dense information packed into
                  a single audio-visual channel.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-xl border border-gray-200">
              <p className="text-sm font-semibold text-gray-900">
                Inferential Reasoning Difficulties
              </p>
              <p className="mt-2 text-sm text-gray-700">
                Difficulty connecting omitted or implied steps in the video to
                understand the full process and its real-world implications.
              </p>
            </div>
          </div>
        </div>

        {/* RQ2: Experiential Factors */}
        <div className="mt-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              RQ2. Experiential Factors Amplifying Challenges
            </h3>
            <p className="mt-2 text-gray-600">
              Beyond cognitive challenges, accumulated life experiences create
              additional barriers
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">
                Systemic Exclusion and Retreat to Video
              </h4>
              <p className="mt-3 text-sm text-gray-700">
                Falling in a &quot;gray area&quot; between neurotypical
                expectations and disability support systems, leading to social
                isolation and dependence on video learning.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">
                The Trap of Uneven Abilities
              </h4>
              <p className="mt-3 text-sm text-gray-700">
                Jagged cognitive profiles where competence in one area leads
                observers to misinterpret struggles elsewhere as lack of
                effort.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <h4 className="text-lg font-semibold text-gray-900">
                Negative Feedback Cycle and Low Self-Efficacy
              </h4>
              <p className="mt-3 text-sm text-gray-700">
                Continuous negative feedback creating an internalized sense of
                inadequacy and diminished confidence even when providing correct
                answers.
              </p>
            </div>
          </div>
        </div>

        {/* RQ3: Coping Strategies */}
        <div className="mt-16">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              RQ3. Coping Strategies and Their Limitations
            </h3>
            <p className="mt-2 text-gray-600">
              Current strategies employed by BIF users and why they fall short
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Seeking External Support */}
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-[#4B8857] rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <h4 className="ml-3 text-lg font-semibold text-gray-900">
                  Seeking External Support
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Participants readily seek help for technical issues but remain
                silent about content comprehension challenges
              </p>
            </div>

            {/* Repetitive Viewing */}
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-[#319AE0] rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h4 className="ml-3 text-lg font-semibold text-gray-900">
                  Repetitive Viewing
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                The most common strategy, with participants watching the same
                content multiple times to grasp information
              </p>
            </div>

            {/* Speed Control */}
            <div className="p-6 bg-white border border-gray-200 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-[#A6A62A] rounded-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="ml-3 text-lg font-semibold text-gray-900">
                  Speed Control
                </h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Most participants avoid using playback speed controls despite
                acknowledging comprehension difficulties
              </p>
            </div>
          </div>

          {/* Limitations as separate connected boxes */}
          <div className="grid gap-6 mt-8 md:grid-cols-3">
            <div className="relative p-6 bg-[#FFF7F5] border border-red-100 rounded-xl">
              <div className="flex items-center mb-3">
                <span className="mr-2 text-lg text-red-500">↓</span>
                <p className="text-sm font-semibold text-red-600">
                  Limitation: Seeking External Support
                </p>
              </div>
              <p className="text-sm text-gray-700">
                Selective help-seeking only for surface-level problems;
                asynchronous help-seeking deadlock in independent contexts.
              </p>
            </div>

            <div className="relative p-6 bg-[#FFF7F5] border border-red-100 rounded-xl">
              <div className="flex items-center mb-3">
                <span className="mr-2 text-lg text-red-500">↓</span>
                <p className="text-sm font-semibold text-red-600">
                  Limitation: Repetitive Viewing
                </p>
              </div>
              <p className="text-sm text-gray-700">
                Causes mental and physical fatigue; users repeatedly encounter
                the same barriers without resolution.
              </p>
            </div>

            <div className="relative p-6 bg-[#FFF7F5] border border-red-100 rounded-xl">
              <div className="flex items-center mb-3">
                <span className="mr-2 text-lg text-red-500">↓</span>
                <p className="text-sm font-semibold text-red-600">
                  Limitation: Speed Control
                </p>
              </div>
              <p className="text-sm text-gray-700">
                Paradoxically refuse to slow down; slowing triggers feelings of
                inadequacy and stigma.
              </p>
            </div>
          </div>

          <div className="p-6 mt-8 bg-[#FFFCDF] border-l-4 border-[#A6A62A] rounded-r-xl">
            <p className="text-sm font-semibold text-[#A6A62A] mb-2">
              Knowledge Barrier
            </p>
            <p className="text-sm text-gray-700">
              These coping strategies reveal a fundamental{" "}
              <strong>
                knowledge barrier between video creators and BIF viewers
              </strong>
              . While creators assume certain baseline understanding, BIF
              users&apos; actual comprehension needs remain unmet, creating
              accessibility gaps that cannot be overcome through individual
              effort alone.
            </p>
          </div>
        </div>
      </section>

      {/* Design Implications */}
      <section
        id="implications"
        className="px-6 py-16 mx-auto max-w-7xl lg:px-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Design Implications
        </h2>
        <p className="mt-4 text-lg text-center text-gray-600">
          Recommendations for BIF-inclusive video learning
        </p>

        <div className="grid gap-8 mt-12 lg:grid-cols-3">
          {/* Cognitive Load Reduction */}
          <div className="p-8 bg-white border-t-4 border-[#4B8857] shadow-lg rounded-xl">
            <h3 className="text-xl font-bold text-gray-900">
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
          <div className="p-8 bg-white border-t-4 border-[#319AE0] shadow-lg rounded-xl">
            <h3 className="text-xl font-bold text-gray-900">
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
          <div className="p-8 bg-white border-t-4 border-[#A6A62A] shadow-lg rounded-xl">
            <h3 className="text-xl font-bold text-gray-900">
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
                  src="/images/NUS_logo.png"
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

      {/* BibTeX Section */}
      <section
        id="bibtex"
        className="px-6 py-16 mx-auto max-w-5xl lg:px-8 bg-gray-50"
      >
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Citation
        </h2>
        <div className="p-6 mt-8 bg-gray-900 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-300">BibTeX</span>
            <button
              type="button"
              onClick={handleCopyBibtex}
              className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-gray-900 bg-white rounded-md shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {hasCopiedBibtex ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre className="text-sm text-gray-100 whitespace-pre-wrap break-words">
            {BIBTEX}
          </pre>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 mx-auto mt-20 max-w-7xl lg:px-8 border-t border-gray-200">
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
