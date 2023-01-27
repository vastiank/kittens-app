import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/molecules/card";
import { Layout } from "../../components/templates/layout";
import { fetchAllKittens } from "../../redux/slices/kittenSlice";
import Spinner from "../../components/atoms/spinner";

export const Kittens = () => {
  const dispatch = useDispatch();
  const { data: kittens } = useSelector((state) => state.kittens);

  useEffect(() => {
    dispatch(fetchAllKittens());
  }, [dispatch]);

  return (
    <Layout>
      <>
        {kittens.length !== 0 ? (
          kittens.map((item, index) => <Card key={index} item={item} />)
        ) : (
          <Spinner />
        )}
      </>
    </Layout>
  );
};
