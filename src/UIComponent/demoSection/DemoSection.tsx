import React from "react";
import "./demoSection.scss";
import CodeBlock from "../codeBlock/CodeBlock";

interface DemoSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  codeExample?: string | null;
}

const DemoSection: React.FC<DemoSectionProps> = ({
  title,
  description,
  children,
  codeExample,
}) => (
  <div className='demo-section-container'>
    <div className='demo-description'>
      <h3>{title}</h3>
      <p>{description} </p>
    </div>
    <div className='demo-section'>{children}</div>
    <div>{codeExample && <CodeBlock codeBlock={codeExample} />}</div>
  </div>
);

DemoSection.defaultProps = {
  codeExample: null,
};

export default DemoSection;
