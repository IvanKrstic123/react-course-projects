function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <div>
      <header className="progress">
        {/*updating progress based on answer*/}
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <p>
          Question{" "}
          <strong>
            {index + 1} / {numQuestions}
          </strong>
        </p>

        <p>
          <strong>
            {points} / {maxPossiblePoints}
          </strong>
        </p>
      </header>
    </div>
  );
}

export default Progress;
