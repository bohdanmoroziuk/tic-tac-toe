const History = ({ history, jumpTo }) => {
  const renderStory = (_, step) => {
    const handleClick = () => jumpTo(step);

    const description = step  
      ? `Go to step #${step}`
      : `To the beginning of the game`;

    return (
      <ol 
        key={step}
        className="story"
        onClick={handleClick}  
      >
        <p className="story__description">
          {description}
        </p>
      </ol>
    );
  };

  return (
    <ul className="history">
      {history.map(renderStory)}
    </ul>
  );
};

export default History;