"use client";

import React, { useState, useEffect } from "react";

const ProjectsPage = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Animal Image Classification using ResNet50",
      date: "Jun 2024",
      category: "Deep Learning",
      description:
        "Advanced computer vision system leveraging transfer learning for multi-class animal recognition with state-of-the-art accuracy.",
      techStack: ["ResNet50", "Transfer Learning", "CNN"],
      icon: "🐾",
      gradient: "from-gray-50 to-slate-50",
      features: [
        "Built an animal image classifier using transfer learning with a pre-trained ResNet50 model and logistic regression",
        "Extracted deep CNN features and achieved high classification accuracy on multi-class animal image data",
      ],
    },
    {
      id: 2,
      title: "Real-time Face Detection and Encoding",
      date: "Nov 2024",
      category: "Computer Vision",
      description:
        "Sophisticated facial recognition system with real-time processing capabilities and high-dimensional feature extraction.",
      techStack: ["OpenCV", "Face Recognition", "Real-time"],
      icon: "👁️",
      gradient: "from-gray-50 to-slate-50",
      features: [
        "Implemented facial detection using the face recognition library and OpenCV to visualize bounding boxes on images",
        "Generated 128-dimensional facial encodings for further verification or recognition tasks",
      ],
    },
    {
      id: 3,
      title: "SMS Spam Detection using Logistic Regression and SVD",
      date: "Feb 2025",
      category: "NLP",
      description: "Intelligent text classification system combining advanced vectorization techniques with dimensionality reduction.",
      techStack: ["Logistic Regression", "SVD", "NLP"],
      icon: "📱",
      gradient: "from-gray-50 to-slate-50",
      features: [
        "Developed a spam classifier using CountVectorizer and logistic regression with Truncated SVD for dimensionality reduction",
        "Achieved high prediction accuracy on real-world SMS data and validated performance with sample message inputs"
      ]
    },
    {
      id: 4,
      title: "Stock Price Prediction using LSTM Networks",
      date: "Apr 2024",
      category: "Time Series",
      description: "Advanced time series forecasting system using deep learning for financial market prediction with technical indicators.",
      techStack: ["LSTM", "Time Series", "TensorFlow"],
      icon: "📈",
      gradient: "from-gray-50 to-slate-50",
      features: [
        "Built a time series forecasting model using LSTM to predict stock prices based on historical data",
        "Improved prediction accuracy by incorporating technical indicators and tuning hyperparameters"
      ]
    },
    {
      id: 5,
      title: "Customer Churn Analysis with Random Forest",
      date: "Aug 2024",
      category: "Classification",
      description: "Business intelligence solution for customer retention using ensemble learning with actionable insights.",
      techStack: ["Random Forest", "Classification", "Analytics"],
      icon: "👥",
      gradient: "from-gray-50 to-slate-50",
      features: [
        "Developed a classification model to predict customer churn using Random Forest on telecom dataset",
        "Identified key features driving churn and visualized insights for business strategy improvements"
      ]
    },
    {
      id: 6,
      title: "Sentiment Analysis of Social Media Posts",
      date: "Dec 2024",
      category: "NLP",
      description: "Real-time social media monitoring system using transformer models for sentiment detection and analysis.",
      techStack: ["BERT", "API", "Social Media"],
      icon: "💬",
      gradient: "from-gray-50 to-slate-50",
      features: [
        "Created a text classification pipeline using BERT embeddings and logistic regression to detect sentiment polarity",
        "Deployed model with real-time API to analyze live Twitter data streams"
      ]
    },
    {
      id: 7,
      title: "Fraud Detection System for Credit Card Transactions",
      date: "Jan 2025",
      category: "Anomaly Detection",
      description: "Advanced fraud prevention system using ensemble anomaly detection techniques for financial security.",
      techStack: ["Isolation Forest", "Autoencoders", "Security"],
      icon: "🔒",
      gradient: "from-gray-50 to-slate-50",
      features: [
        "Designed an anomaly detection system combining isolation forest and autoencoders for fraud identification",
        "Achieved low false-positive rates while maintaining high recall on imbalanced transaction data"
      ]
    },
    {
      id: 8,
      title: "Image Style Transfer using Neural Networks",
      date: "May 2024",
      category: "Computer Vision",
      description: "Creative AI application enabling artistic style transformation using convolutional neural networks.",
      techStack: ["CNN", "Style Transfer", "Web Demo"],
      icon: "🎨",
      gradient: "from-gray-50 to-slate-50",
      features: [
        "Implemented neural style transfer to blend content and style images using convolutional neural networks",
        "Created a web demo enabling users to apply artistic styles to their own photos in real-time"
      ]
    },
    {
      id: 9,
      title: "Predictive Maintenance of Industrial Machines",
      date: "Jul 2024",
      category: "IoT Analytics",
      description: "Industrial IoT solution for equipment monitoring using sensor data analysis and predictive modeling.",
      techStack: ["Gradient Boosting", "IoT", "Sensors"],
      icon: "⚙️",
      gradient: "from-gray-50 to-slate-50",
      features: [
        "Used sensor data and gradient boosting models to predict equipment failure before breakdowns",
        "Reduced downtime by scheduling timely maintenance based on model alerts and feature importance"
      ]
    }
  ];
    // ... rest of your projects (unchanged)
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProjects(
              (prev) => new Set(prev).add(entry.target.dataset.projectId || "")
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll("[data-project-id]");
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-black/5 rounded-full px-4 py-2 text-sm font-medium text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                <span>Data Science Portfolio</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight">
                <span className="bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light">
                Exploring the frontiers of machine learning and artificial
                intelligence through innovative solutions
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center space-x-12 pt-8">
              <div className="text-center">
                <div className="text-3xl font-black text-black">
                  {projects.length}
                </div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Projects
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black">9</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Domains
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-black">25+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  Technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-id={project.id}
              className={`group relative transform transition-all duration-700 ${
                visibleProjects.has(project.id.toString())
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div
                className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-50/20 to-gray-100/40"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-black/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                </div>

                <div className="relative p-6 h-full flex flex-col">
                  {/* Hero Icon */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <span className="text-2xl filter drop-shadow-sm">
                      {project.icon}
                    </span>
                  </div>

                  {/* Project Number and Date */}
                  <div className="absolute top-4 right-4 text-right space-y-1">
                    <div className="text-4xl font-black text-gray-200/60 leading-none select-none group-hover:text-gray-300/80 transition-colors duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="text-xs text-gray-600 font-medium bg-white/60 backdrop-blur-sm px-2 py-1 rounded">
                      {project.date}
                    </div>
                  </div>

                  {/* Header */}
                  <div className="space-y-3 mb-4 pr-16 pt-20">
                    <div>
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-black text-white shadow-md">
                        {project.category}
                      </span>
                    </div>
                    <h2 className="text-xl font-black text-black leading-tight group-hover:text-gray-800 transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="space-y-3 mb-4">
                    <h3 className="text-xs font-bold text-black uppercase tracking-wider">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className={`px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-medium transition-all duration-300 hover:bg-black hover:text-white ${
                            hoveredProject === project.id
                              ? "animate-pulse"
                              : ""
                          }`}
                          style={{ animationDelay: `${techIndex * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex-1">
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-black uppercase tracking-wider">
                        Key Features
                      </h3>
                      <div className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-2 group-hover:translate-x-1 transition-transform duration-300"
                            style={{
                              transitionDelay: `${featureIndex * 50}ms`,
                            }}
                          >
                            <div className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                            <p className="text-xs text-gray-700 leading-relaxed">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
