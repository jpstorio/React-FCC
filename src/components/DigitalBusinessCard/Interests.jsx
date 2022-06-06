import s from "../css/DigitalCard.module.css";

function Interests() {
  return (
    <div className={s.interests__container}>
      <div className={s.about__heading}>About</div>
      <div className={s.content}>
        I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn.
      </div>

      <div className={s.interests__heading}>Interests</div>
      <div className={s.content}>
        Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
      </div>
    </div>
  );
}

export default Interests;
