export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>Moives {id}</h1>;
}
