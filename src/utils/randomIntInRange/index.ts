interface IGetRandomIntInRangeProps {
  min: number;
  max: number;
}

const getRandomIntInRange = (props: IGetRandomIntInRangeProps) => {
  const { min, max } = props;

  const randomInt = Math.floor(Math.random() * (max - min) + min);

  return randomInt;
};

export { getRandomIntInRange };
