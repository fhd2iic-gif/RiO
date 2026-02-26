import React from 'react';

const featuredAssetsData = {
  Sounds: ['Sound1', 'Sound2', 'Sound3'],
  Graphics: ['Graphic1', 'Graphic2', 'Graphic3'],
  BloodEffects: ['BloodEffect1', 'BloodEffect2'],
  KillEffects: ['KillEffect1', 'KillEffect2'],
  Citizens: ['Citizen1', 'Citizen2', 'Citizen3']
};

const FeaturedAssets = () => {
  return (
    <div>
      <h1>Featured Game Assets</h1>
      {Object.keys(featuredAssetsData).map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {featuredAssetsData[category].map(asset => (
              <li key={asset}>{asset}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FeaturedAssets;