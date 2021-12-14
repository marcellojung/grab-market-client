function ChildComponent(props) {
  const { name, age } = props;
  return (
    <div>
      <h3>
        나는 {name}입니다. {age}살입니다.
      </h3>
    </div>
  );
}

export default ChildComponent;
