import React, { useEffect, useState } from "react";
import { getHeader, updateHeader } from "../../api/header";
// import LOGO from "../../assets/images/rajendra.svg";

const MainAdmin = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [navbarData, setNavbarData] = useState({
    menu: {
      home: { text: "", url: "" },
      about: { text: "", url: "" },
      portfolio: { text: "", url: "" },
      services: { text: "", url: "" },
      blog: { text: "", url: "" },
      contact: { text: "", url: "" },
    },
    login: { url: "", content: "" },
  });

  const getNav = async () => {
    setIsLoading(true);
    try {
      const data = await getHeader();
      setNavbarData(data[0]); // Assuming your data structure
    } catch (error) {
      console.error("Error fetching navbar data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e, section, field) => {
    setNavbarData({
      ...navbarData,
      [section]: {
        ...navbarData[section],
        [field]: e.target.value,
      },
    });
  };

  const handleMenuChange = (e, menu) => {
    setNavbarData({
      ...navbarData,
      menu: {
        ...navbarData.menu,
        [menu]: {
          ...navbarData.menu[menu],
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateHeader(navbarData);
      setIsEditing(false);
      getNav(); // Refresh the component by fetching the latest data
    } catch (error) {
      console.error("Error updating navbar data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getNav();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Menu</h2>
          {Object.keys(navbarData?.menu).map((key) => (
            <div key={key}>
              <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
              <label>
                Text:
                <input
                  type="text"
                  name="text"
                  value={navbarData?.menu[key].text}
                  onChange={(e) => handleMenuChange(e, key)}
                  disabled={!isEditing}
                />
              </label>
              <label>
                URL:
                <input
                  type="text"
                  name="url"
                  value={navbarData?.menu[key].url}
                  onChange={(e) => handleMenuChange(e, key)}
                  disabled={!isEditing}
                />
              </label>
            </div>
          ))}
        </div>

        <div>
          <h2>Login</h2>
          <label>
            Login URL:
            <input
              type="text"
              value={navbarData?.login?.url}
              onChange={(e) => handleInputChange(e, "login", "url")}
              disabled={!isEditing}
            />
          </label>
          <label>
            Login Content:
            <input
              type="text"
              value={navbarData?.login?.content}
              onChange={(e) => handleInputChange(e, "login", "content")}
              disabled={!isEditing}
            />
          </label>
        </div>

        <button
          type="button"
          onClick={() => setIsEditing(true)}
          disabled={isEditing || isLoading}
        >
          Edit
        </button>
        <button type="submit" disabled={!isEditing || isLoading}>
          {isLoading ? "Saving..." : "Save"}
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default MainAdmin;
