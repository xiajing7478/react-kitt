interface CapchaData {
  msg: string;
  img: string;
  captchaEnabled: boolean;
  code: number;
  uuid: string;
}

interface UserObject {
  code: string;
  msg: string;
  result: Result;
}

interface Result {
  id: string;
  account: string;
  mobile: string;
  token: string;
  avatar: string;
  nickname: string;
  gender: string;
  birthday: string;
  cityCode: string;
  provinceCode: string;
  profession: string;
}
