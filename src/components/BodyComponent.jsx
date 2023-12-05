function BodyComponent(props){
  // 
  // let userName = props.name
  // let userAge = props.age
  let {name : userName , age } = props;
  return(
    <>
    <h2> My user has a name {userName} and age {age}</h2>
    </>
  );
}
export default BodyComponent;