import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabase("places.db"); //places라는 db생성. db는 확장자. 해당 db가 존재하지 않으면 SQLite가 자동으로 생성

export function init() {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMERY KEY NOT NULL,
            title TEXT NOT NULL,
            imageUri TEXT NOT NULL,
            address TEXT NOT NULL,
            lat REAL NOT NULL,
            lng REAL NOT NULL
        )`,
        [], //이 문장에서 사용될만한 값의 배열을 전달
        () => {
          resolve(); //이미테이블이 존재하고 에러가 아닐 경우도 성공
        }, //성공
        (_, error) => {
          reject(error);
        } //실패한 transaction(필요없으니 _), error
      ); //SQL문자열 실행. db에 이미지파일이 저장되지 않아 경로로 저장.
    }); //해당 db의 쿼리 실행
  });

  return promise;
}
