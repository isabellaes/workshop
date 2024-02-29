const ColorBox = ({ colors }) => {
  return (
    <div className="colorbox">
      {colors.map((color) => (
        <div
          key={color}
          style={{
            backgroundColor: color,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorBox;

/* 

Skapa en komponent ColorBox som tar emot en array av strängar med färgnamn i CSS. Komponenten är en div med flera div-kvadrater i sig på rad. De inre divarna är färgade enligt arrayen (och lika många kvadrater som element i arrayen).

UTMANING: Lägg till en textbox och en knapp. När man klickar på knappen så läggs texten i textboxen till arrayen av färgnamn. En till färgad kvadrat läggs till med den färg man skrev i textboxen.


*/
