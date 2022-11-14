import Cards from "./cards";
import { IUser, user } from "./const cards/cards.const";

const CardsIndex = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center">
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {user.map((e: IUser) => (
          <Cards {...e} />
        ))}
      </div>
    </div>
  );
};

export default CardsIndex;
