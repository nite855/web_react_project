import dummy from '../db/data.json'  //dummy :data.json 파일의 내용을 불러와서 dummy라는 객체에 저장
import { Link } from "react-router-dom"; //Link : a태그 대신 사용, 페이지 전환 없이도 이동 가능
import { useEffect, useState } from 'react';
export default function DayList() {
  const [days, setDays] = useState([]); //days : 빈 배열로 초기화, setDays : days 상태를 업데이트하는 함수
  
  useEffect(() => {
    fetch('http://localhost:3001/days') //fetch : 지정된 URL로 HTTP 요청을 보내고, 응답을 처리하는 함수
      .then(res => res.json()) //.json() : 응답 객체를 JSON 형식으로 변환하는 메서드, json : JavaScript Object Notation
      .then(data => setDays(data)); //setDays(data) : 받아온 데이터를 days 상태로 설정
  })
  return (
    <ul className="list_day">
      {days.map(day => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
    );
    //화살표 함수에서 return을 생략할 때는 중괄호 대신 소괄호를 사용해야 합니다. 
}

       