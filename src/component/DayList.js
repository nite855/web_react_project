import dummy from '../db/data.json'  //dummy :data.json 파일의 내용을 불러와서 dummy라는 객체에 저장
import { Link } from "react-router-dom"; //Link : a태그 대신 사용, 페이지 전환 없이도 이동 가능

export default function DayList() {
  return (
    <ul className="list_day">
      {dummy.days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
    );
    //화살표 함수에서 return을 생략할 때는 중괄호 대신 소괄호를 사용해야 합니다. 
}
       