

const API_BASE_URL = "http://localhost:3003";


export const createUser = async (formData, token) => {
    const response = await fetch(`${API_BASE_URL}/createnew`, {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    if (!response.ok) throw new Error("Failed to create user");
    return response.json();
};

export const getAllUsers = async (token) => {
    const response = await fetch(`${API_BASE_URL}/users/profiles`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
    if (!response.ok) throw new Error("Failed ot fetch users");
    return response.json();
}

export const getUserByID = async (id, token) => {
    console.log(id);
    const response = await fetch(`${API_BASE_URL}/users/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
    );
    if (!response.ok) throw new Error("Failed to fetch users");
    return response.json();
}

export const updateUser = async ({ id, formData, token }) => {
    const response = await fetch(`${API_BASE_URL}/users/${id}/edit`, {
        method: "PUT",
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) throw new Error("Failed to update user");
    return response.json();
};

export const deleteUser = async (id) => {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete user");
}












