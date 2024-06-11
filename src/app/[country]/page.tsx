export function Page({ params }) {
  const { country } = params;
  console.log(country);

  return (
    <main>
      <p>Country Detail page</p>
    </main>
  );
}
