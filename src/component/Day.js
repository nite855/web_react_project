import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import Word from "../component/Word";

export default function Day() {
  const { day } = useParams(); //useParams :URL 파라미터를 받아오는 훅, 문자열을 받아옴
  const wordList = dummy.words.filter(word => word.day === Number(day)); //문자 숫자 비교니 형변환 필요

 return (
    <>
      <h2>Day {day}</h2>
      <table>
        <tbody>
          {wordList.map(word => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}