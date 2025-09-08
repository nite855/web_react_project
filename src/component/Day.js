import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Word from "../component/Word";

export default function Day() {
  const { day } = useParams(); //useParams :URL 파라미터를 받아오는 훅, 문자열을 받아옴
  const [Words, setWords] = useState([]); //Words : 빈 배열로 초기화, setWords : Words 상태를 업데이트하는 함수

 useEffect(() => {
    fetch(`http://localhost:3001/words?day=${day}`) //fetch : 지정된 URL로 HTTP 요청을 보내고, 응답을 처리하는 함수
      .then(res => res.json()) //.json() : 응답 객체를 JSON 형식으로 변환하는 메서드, json : JavaScript Object Notation
      .then(data => setWords(data)); //setWords(data) : 받아온 데이터를 Words 상태로 설정
  }, [] ); //useEfffect에서 특정값을 사용시 의존성배열, 두번째 인자에 그  값을 넣어줘야함

 return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {Words.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}