import { ProjectDetail } from '@/components/site/project-detail';

export function CreditCard() {
  return (
    <ProjectDetail
      title="Interactive Credit Card"
      category="React / Material UI / Animations"
      techStack={['React', 'Material UI', 'JavaScript', 'CSS Animations']}
      demoUrl="https://elegant-trifle-0a151d.netlify.app/"
      githubUrl="https://github.com/lexaabrahamsen/credit-card-form"
      images={['/CreditCardFeatureDark.jpg']}
      description={
        <p>
          React Frontend: The project leverages the power of React to create a dynamic and
          responsive user interface. React's component-based architecture ensures a modular and
          maintainable codebase, facilitating easy integration and scalability. Material UI
          Design: Immerse users in a visually stunning experience with the use of Material UI
          components. The project adheres to Material Design principles, offering a clean,
          intuitive, and consistent design that enhances usability. Interactive Credit Card Form:
          The centerpiece of the project is an interactive credit card input form. Users can
          seamlessly enter their credit card details through a visually appealing and
          user-friendly interface. Real-time validation ensures data accuracy and a smooth user
          journey. Animations for Engagement: Elevate the user experience with fluid animations
          that respond to user interactions. From subtle hover effects to animated transitions
          between form steps, the project showcases how animations can make the credit card input
          process engaging and delightful. Responsive Design: The application is designed to
          provide a seamless experience across various devices and screen sizes. Whether accessed
          on a desktop, tablet, or smartphone, users can interact with the credit card form
          effortlessly.
        </p>
      }
    />
  );
}
