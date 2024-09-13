import * as React from "react";


interface IVerifyCodeTemplateProps {
  code: string;
}

const VerifyCodeTemplate: React.FunctionComponent<IVerifyCodeTemplateProps> = ({code}) => {
  return (
    <div>
      <p>Код подтверждения почты: {code}</p>

      <p>
        Перейдите{" "}
        <a
          href={`https://next-ninja-sushi.vercel.app/api/auth/verify?code=${code}`}
        >
          по ссылке
        </a>
        , чтобы подтвердить почту
      </p>
    </div>
  );
};

export default VerifyCodeTemplate;
