export const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "myknpnzn";
export const FORMSPREE_URL = `https://formspree.io/f/${FORMSPREE_ID}`;

export const submitFormToFormspree = async (formData) => {
  const response = await fetch(FORMSPREE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }

  return response;
};
