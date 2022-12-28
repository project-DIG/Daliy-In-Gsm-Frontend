import * as S from './style';
import * as I from '../../../assets/svg';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Input from 'components/Common/Input';
import auth from 'api/auth';

export default function SignupEmailPage() {
  const { register, handleSubmit } = useForm();
  const [isError, setIsError] = useState(false);

  const getAuthenticationMail = async (data: any) => {
    setIsError(false);
    try {
      console.log(data.email);

      const res: any = await auth.getAuthenticationMail(data.email);
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  };
  const onValid = async (data: any) => {
    setIsError(false);
    try {
      console.log(data.email);

      const res: any = await auth.getAuthenticationMail(data.email);
      console.log(res);
    } catch (error: any) {
      console.log(error);
    }
  };
  const inValid = (error: any) => {
    setIsError(true);
    console.log(error);
  };
  return (
    <S.SignupLayout>
      <S.SignupSection>
        <Link to="/signin">
          <I.Back />
        </Link>
        <S.LetsStart>
          Let's
          <br />
          Start!
        </S.LetsStart>
        <S.EmailForm>
          <S.EmailText>@gsm.hs.kr</S.EmailText>
          <S.EmailBox onSubmit={handleSubmit(onValid, inValid)}>
            <Input
              register={register('email', {
                required: '이메일 입력해주세요.',
                maxLength: {
                  value: 6,
                  message: '이메일은 6글자입니다.',
                },
                minLength: {
                  value: 6,
                  message: '이메일은 6글자입니다.',
                },
              })}
              email={true}
              type="text"
              isError={isError}
            />
            <S.EmailButton>인증하기</S.EmailButton>
          </S.EmailBox>
          <S.AuthenticationBox>
            <S.Input
              register={register('email', {
                required: '인증메일을 확인해주세요',
                maxLength: {
                  value: 6,
                  message: '인증메일은 6글자 입니다',
                },
                minLength: {
                  value: 6,
                  message: '인증메일은 6글자 입니다',
                },
              })}
              type="text"
              placeholder="인증번호"
              isError={isError}
            />
            <S.Check>확인</S.Check>
          </S.AuthenticationBox>
        </S.EmailForm>
        <S.SignBox>
          <I.LoginButton />
        </S.SignBox>
      </S.SignupSection>
    </S.SignupLayout>
  );
}