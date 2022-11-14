import { IUser } from "./const cards/cards.const";

const Cards = (user: IUser): JSX.Element => {
  return (
    <div className="w-72 h-96 bg-glass rounded backdrop:blur-sm m-2 flex justify-center items-center">
      {user.username}
    </div>
  );
};

export default Cards;
