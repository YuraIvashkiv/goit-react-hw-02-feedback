export const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}





// import React, { Component } from 'react';
// import { Statistics } from './Statistics'; // Шлях до компоненту Statistics
// import { FeedbackOptions } from './FeedbackOptions'; // Шлях до компоненту FeedbackOptions
// import { Section } from './Section'; // Шлях до компоненту Section

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleFeedback = type => {
//     this.setState(prevState => ({
//       [type]: prevState[type] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     return total > 0 ? Math.round((good / total) * 100) : 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <div>
//         <h1>Feedback App</h1>

//         <Section title="Feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.handleFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={totalFeedback}
//             positivePercentage={positivePercentage}
//           />
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
