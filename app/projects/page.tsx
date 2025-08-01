// app/projects/page.tsx

export const metadata = {
  title: "Projects - My Portfolio",
  description: "Showcase of personal data science and machine learning projects.",
};

import React from "react";

const ProjectsPage = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-black mb-6">Personal Projects</h1>

      <div className="space-y-10 text-gray-300 text-lg">
        <div>
          <h2 className="text-2xl font-semibold text-black mb-2">
            ✐ Animal Image Classification using ResNet50
            <span className="text-sm font-normal text-gray-400 ml-2">Jun 2024</span>
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Built an animal image classifier using transfer learning with a pre-trained ResNet50 model and logistic regression.
            </li>
            <li>
              Extracted deep CNN features and achieved high classification accuracy on multi-class animal image data.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black mb-2">
            ✐ Real-time Face Detection and Encoding
            <span className="text-sm font-normal text-gray-400 ml-2">Nov 2024</span>
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Implemented facial detection using the face recognition library and OpenCV to visualize bounding boxes on images.
            </li>
            <li>
              Generated 128-dimensional facial encodings for further verification or recognition tasks.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-black mb-2">
            ✐ SMS Spam Detection using Logistic Regression and SVD
            <span className="text-sm font-normal text-gray-400 ml-2">Feb 2025</span>
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Developed a spam classifier using CountVectorizer and logistic regression with Truncated SVD for dimensionality reduction.
            </li>
            <li>
              Achieved high prediction accuracy on real-world SMS data and validated performance with sample message inputs.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
