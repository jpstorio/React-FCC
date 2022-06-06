import s from "../css/DigitalCard.module.css";

function Interests() {
  return (
    <div className={s.interests__container}>
      <div className={s.about__heading}>About</div>
      <div className={s.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt
        reiciendis quos ea modi! Labore magni optio corrupti odio deleniti
        veritatis, beatae numquam. Neque illo fugit enim sunt ab iste? Sit 
      </div>

      <div className={s.interests__heading}>Interests</div>
      <div  className={s.content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sunt
        reiciendis quos ea modi! Labore magni optio corrupti odio deleniti
        veritatis, beatae numquam. Neque illo fugit enim sunt ab iste? Sit
        temporibus assumenda, velit eaque sapiente vitae suscipit quis. Non 
      </div>
    </div>
  );
}

export default Interests;
