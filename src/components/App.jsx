import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <div>React homework template</div>

      <FeedbackOptions />
    </div>
  );
};
