import { useState, useTransition } from "react";
import { User } from "@/types/types";
import { Button, Input, Modal } from "@/components";
import { useForm } from "react-hook-form";

interface UserCardProps {
  user: User;
  onEdit: (updatedUser: User, imageFile?: File) => void;
  onDelete: (id: number) => void;
}

const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(user.profileImage || null);
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);
  const [isPending, startTransition] = useTransition(); // Transition state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: user,
  });

  // Convert image to Base64 for preview
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
    }
  };

  const handleSave = (data: User) => {
    startTransition(() => {
      onEdit(data, selectedImage ?? undefined); // Send updated data along with the selected image
      setIsEditing(false);
    });
  };

  return (
    <div className="border p-4 rounded shadow bg-white relative">
      {imagePreview && (
        <img src={imagePreview} alt="Profile" className="w-16 h-16 rounded-full mx-auto" />
      )}
      <h2 className="text-lg font-bold mt-2">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Password: {user.password}</p>

      {/* Edit & Delete Buttons */}
      <div className="flex justify-end space-x-2 mt-3">
        <Button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white">
          Edit
        </Button>
        <Button onClick={() => onDelete(user.id)} className="bg-red-500 text-white">
          Delete
        </Button>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <Modal title="Edit User" onClose={() => setIsEditing(false)}>
          <form onSubmit={handleSubmit(handleSave)} className="p-4 space-y-4">
            <Input
              label="Name"
              {...register("name", { required: "Name is required" })}
              error={errors.name?.message}
            />
            <Input
              label="Email"
              type="email"
              {...register("email", { required: "Email is required" })}
              error={errors.email?.message}
            />
            <Input
              label="Phone"
              {...register("phone", { required: "Phone number is required" })}
              error={errors.phone?.message}
            />
            <Input
              label="Password"
              type="password"
              {...register("password", { required: "Password is required" })}
              error={errors.password?.message}
            />

            {/* Image Upload Input */}
            <div>
              <label className="block font-medium">Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="flex justify-end space-x-2">
              <Button type="button" onClick={() => setIsEditing(false)} className="bg-gray-500 text-white">
                Cancel
              </Button>
              <Button type="submit" isLoading={isPending} className="bg-green-500 text-white">
                {isPending ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default UserCard;
