"use client";

import React from "react";

const ExperiencePage = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl font-bold text-black mb-10">Experience & Skills</h1>

      {/* Technical Skills */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Languages:</strong> Python, SQL (MySQL Server, PostgreSQL), Hive SQL, R</li>
          <li><strong>Tools:</strong> MS Excel, Tableau, PowerBI, VS Code, Hadoop, Hive, Google Data Studio, SQL Server Management Studio</li>
          <li><strong>Python Libraries:</strong> NumPy, Pandas, PySpark</li>
          <li><strong>Data Analysis Skills:</strong> Data Analysis, Data Mining, Data Visualization, KPIs Development, Predictive Analytics, ETL</li>
        </ul>
      </div>

      {/* Academic Internships */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Academic Internships</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Python:</strong> Pantech Solutions (Jun 2024 - Jul 2024)</li>
          <li><strong>Data Analytics (30 Days):</strong> Pantech Solutions (Sept 2024 - Oct 2024)</li>
          <li><strong>AI (30 Days):</strong> Pantech Solutions (Oct 2024 - Nov 2024)</li>
          <li><strong>Machine Learning (30 Days):</strong> Pantech Solutions (Nov 2024 - Dec 2024)</li>
          <li><strong>Deep Learning (30 Days):</strong> Pantech Solutions (Dec 2024 - Jan 2025)</li>
        </ul>
      </div>

      {/* Industry Internship */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Industry Internship</h2>
        <p className="text-gray-700">
          <strong>Intern at CAPCO CONSULTING SERVICES</strong> – <em>(Ongoing)</em>
        </p>
      </div>
    </section>
  );
};

export default ExperiencePage;