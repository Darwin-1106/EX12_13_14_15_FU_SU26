import { useState } from "react";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Strawberry",
];

function Q6() {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "8px 12px",
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "14px",
          marginBottom: "10px",
        }}
      />
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "10px 10px",
                borderBottom: "1px solid #4b4747",
                backgroundColor: "#474545",
                marginBottom: "4px",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            >
              {item}
            </li>
          ))
        ) : (
          <li style={{ color: "gray", fontStyle: "italic" }}>No items found</li>
        )}
      </ul>
    </div>
  );
}
export default Q6;
