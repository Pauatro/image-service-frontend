import { SyntheticEvent } from "react";
import { useLoginForm } from "../../application/hooks/useLoginForm";
import { Input, PasswordInput } from "../../../shared/ui/components/Inputs";
import { Button } from "../../../shared/ui/components/Button";

export const LoginScreen = () => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    login,
  } = useLoginForm();

  const onUsernameChange = (event: SyntheticEvent) =>
    setUsername((event.target as HTMLTextAreaElement).value);

  const onPasswordChange = (event: SyntheticEvent) =>
    setPassword((event.target as HTMLTextAreaElement).value);

  return (
    <div className="p-8 flex flex-col items-center justify-center">
      <div className="w-1/2 max-w-4xl min-w-min flex flex-col gap-2">
        <Input label="Username" value={username} onChange={onUsernameChange} />
        <PasswordInput label="Password" value={password} onChange={onPasswordChange} />
        <Button onClick={login}>
          Login
        </Button>
      </div>
    </div>
  );
};
