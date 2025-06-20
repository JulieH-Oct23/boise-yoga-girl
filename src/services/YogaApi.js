const BASE_URL = "https://yoga-api-nzy4.onrender.com/v1";

export async function getAllCategories() {
  try {
    const res = await fetch(`${BASE_URL}/categories`);
    if (!res.ok) throw new Error("Failed to fetch categories");
    return await res.json();
  } catch (err) {
    return { error: err.message };
  }
}

export async function getAllPoses() {
  try {
    const res = await fetch(`https://yoga-api-nzy4.onrender.com/v1/poses`);
    if (!res.ok) throw new Error("Failed to fetch poses");
    return await res.json(); // This includes image URLs
  } catch (err) {
    return { error: err.message };
  }
}

export async function getPoseByName(name) {
  try {
    const res = await fetch(
      `${BASE_URL}/poses?name=${encodeURIComponent(name)}`
    );
    if (!res.ok) throw new Error("Pose not found");
    return await res.json();
  } catch (err) {
    return { error: err.message };
  }
}

export async function getPosesByLevel(level) {
  try {
    const res = await fetch(`${BASE_URL}/poses?level=${level}`);
    if (!res.ok) throw new Error("No poses for this level");
    return await res.json();
  } catch (err) {
    return { error: err.message };
  }
}

export async function getPoseById(id) {
  try {
    const res = await fetch(`${BASE_URL}/poses/${id}`);
    if (!res.ok) throw new Error("Pose not found");
    return await res.json();
  } catch (err) {
    return { error: err.message };
  }
}

export async function searchPoseBySanskrit(name) {
  try {
    const res = await fetch(
      `${BASE_URL}/poses?sanskrit_name=${encodeURIComponent(name)}`
    );
    if (!res.ok) throw new Error("No poses match that Sanskrit name");
    return await res.json();
  } catch (err) {
    return { error: err.message };
  }
}
