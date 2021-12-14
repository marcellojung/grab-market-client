import React from "react";
function TimerComponent() {
  const [time, setTime] = React.useState(0);
  console.log("Component 업데이트!"); // time이 업데이트될 때마다 계속 호출됩니다.
  React.useEffect(function () {
    setTime(time + 1);
  }, []);

  return (
    <div>
      <h3>{time}초</h3>
      {/* 클릭할 때마다 setTime으로 state를 업데이트해줍니다. */}
      <button>1씩 올려주세요</button>
    </div>
  );
}
export default TimerComponent;
