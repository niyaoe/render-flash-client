import { useState } from "react";
import "./EditProfile.css";

export default function EditProfile() {
  const [preview, setPreview] = useState(null);
  const [selectedSoftwares, setSelectedSoftwares] = useState([]);

  const softwares = [
    "After Effects",
    "Premiere Pro",
    "CapCut",
    "Final Cut Pro",
    "DaVinci Resolve",
    "Node video",
    "Alight Motion",
  ];

  const toggleSoftware = (software) => {
    setSelectedSoftwares((prev) =>
      prev.includes(software)
        ? prev.filter((item) => item !== software)
        : [...prev, software],
    );
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      softwares: selectedSoftwares,
    };

    console.log(formData); // API ready
  };

  return (
    <div className="rf-account-settings">
      <h3 className="rf-settings-title">Edit Profile</h3>

      {/* PROFILE PIC */}
      <div className="rf-profile-pic-section">
        <img
          src={preview || "https://i.pravatar.cc/150?img=32"}
          alt="profile"
          className="rf-profile-preview"
        />

        <label className="rf-upload-btn">
          Edit Avatar
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            hidden
          />
        </label>
        {/* usernanme */}
        <div className="rf-form-group">
          <input type="text" placeholder="username" />
        </div>
      </div>

      {/* FORM */}
      <form className="rf-settings-form" onSubmit={handleSubmit}>
        {/* NAME */}
        <div className="rf-form-group">
          <label>Name</label>
          <input type="text" placeholder="Your name" />
        </div>

        {/* BIO */}
        <div className="rf-form-group">
          <label>Bio</label>
          <textarea placeholder="Write something about you..." />
        </div>

        {/* SOFTWARE CHIPS */}
        <div className="rf-form-group">
          <label>Softwares</label>

          <div className="rf-software-chips">
            {softwares.map((software) => (
              <div
                key={software}
                className={`rf-chip ${
                  selectedSoftwares.includes(software) ? "active" : ""
                }`}
                onClick={() => toggleSoftware(software)}
              >
                {software}
              </div>
            ))}
          </div>
        </div>

        {/* COUNTRY */}
        <div className="rf-form-group">
          <label>Country</label>
          <select>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
            <option>UAE</option>
            <option>Canada</option>
          </select>
        </div>

        {/* APPLY BUTTON */}
        <button type="submit" className="rf-apply-btn">
          Apply Changes
        </button>
      </form>
    </div>
  );
}
