export const Rendering = () => {
  const hours = new Date().getHours();
  const isNight = 18 <= hours || hours <= 6;
  const isDay = !isNight;

  let content;
  if (isNight) {
    content = <span>night</span>;
  } else {
    content = <span>day</span>;
  }

  const symbols = [
    { title: "A", isNumber: false, id: 1 },
    { title: "1", isNumber: true, id: 2 },
    { title: "B", isNumber: false, id: 3 },
    { title: "2", isNumber: true, id: 4 },
  ];

  const listItems = symbols.map((symbol) => (
    <li
      key={symbol.id}
      style={{
        color: symbol.isNumber ? "green" : "red",
      }}>
      {symbol.title}
    </li>
  ));

  return (
    <>
      <h2>Basic / Rendering</h2>

      <hr />
      <h4>conditional in variable</h4>
      {content}

      <hr />
      <h4>conditional in line</h4>
      {isNight ? <span>night</span> : <span>day</span>}

      <hr />
      <h4>conditional in boolean</h4>
      {isDay && <span>day</span>}
      {isNight && <span>night</span>}

      <hr />
      <h4>lists in variable</h4>
      <ul>{listItems}</ul>

      <hr />
      <h4>lists in line</h4>
      <ul>
        {symbols.map((symbol) => (
          <li
            key={symbol.id}
            style={{
              color: symbol.isNumber ? "green" : "red",
            }}>
            {symbol.title}
          </li>
        ))}
      </ul>
    </>
  );
};
