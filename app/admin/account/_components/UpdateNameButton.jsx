// import useSession from "@/app/hooks/useSession";
// import { Button } from "@/components/ui/button";
// import ButtonItem from "@/components/ui/buttonList/ButtonItem";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";

// import { yupResolver } from "@hookform/resolvers/yup";
// import { Loader2, Save } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";

// const UpdateBioFormSchema = yup.object().shape({
//   firstname: yup
//     .string("Vous devez renseigner un titre")
//     .required("Un titre est requis"),
//   lastname: yup
//     .string("Vous devez renseigner une description")
//     .required("Une description est requise"),
// });

// export function UpdateBioButton() {
//   const [isDialogOpen, setIsDialogOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [name, setName] = useState("");
//   const { user, loading, refreshSession } = useSession();
//   const [formData, setFormData] = useState({});
//   const [dataName, setDataName] = useState([]);

//   const form = useForm({ resolver: yupResolver(UpdateBioFormSchema) });

//   const getUserName = async () => {
//     try {
//       const dataBio = await getName(formData);
//       console.log("Name details :", dataName);

//       if (dataName) {
//         setBio(dataName);
//         setFormData(dataName);
//       } else {
//         console.error("Error fetching name");
//       }
//     } catch (error) {
//       console.error(`Error fetching name : ${error.message}`);
//     }
//   };

//   const updateUserName = async () => {
//     try {
//       const dataBio = await updateName(formData, user.id);
//       console.log("UpdateName response:", dataName);

//       if (dataName !== null) {
//         setName(dataName);
//       } else {
//         console.error("Error fetching name");
//       }
//     } catch (error) {
//       console.error(`Error fetching name : ${error.message}`);
//     }
//   };

//   useEffect(() => {
//     updateUserName();
//   }, []);

//   const handleSubmit = async () => {
//     try {
//       const formData = form.getValues();
//       console.log("Form Data handlSubmit:", formData);
//       const res = await updateName(formData, user.id);

//       if (res) {
//         console.log(`Data inserted successfully:`, res);
//         setIsDialogOpen(false);
//       } else {
//         console.error(`Error update data`);
//       }
//     } catch (error) {
//       console.error(`Error update data: ${error.message}`);
//     }
//   };

//   const handleOpenChange = (isOpen) => {
//     refreshSession();
//     getUserName();
//     setIsDialogOpen(isOpen);
//   };

//   const handleOpen = () => setIsDialogOpen(true);

//   return (
//     <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
//       <DialogTrigger asChild className="flex justify-start">
//         <ButtonItem
//           onClick={handleOpen}
//           //   isLoading={loading}
//           className="shadow-none border-purple/60 border-t-0 dark:hover:bg-purple/60 "
//         >
//           Nom complet
//         </ButtonItem>
//       </DialogTrigger>
//       <DialogContent className="sm:max-w-[425px] bg-white dark:shadow-inner dark:shadow-purple/60 shadow-purple/40 shadow-md border-none bg-purple/20 backdrop-blur-3xl drop-shadow-lg ">
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(handleSubmit)}>
//             <DialogHeader>
//               <DialogTitle>Mise à jour</DialogTitle>
//               <DialogDescription></DialogDescription>
//             </DialogHeader>
//             <div className="grid gap-4 py-4">
//               <FormField
//                 control={form.control}
//                 name="firstname"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Prénom </FormLabel>
//                     <FormControl>
//                       <Input type="firstname" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="Lastname"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Nom</FormLabel>
//                     <FormControl>
//                       <Input type="Lastname" {...field} />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <DialogFooter>
//               <Button
//                 disabled={isLoading}
//                 className="gap-2 dark:hover:bg-pale_pink/20  hover:bg-[#baa8bbc0] dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/20 rounded-xl"
//               >
//                 {isLoading ? (
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                 ) : (
//                   <Save size="16" />
//                 )}
//                 Sauvegarder
//               </Button>
//             </DialogFooter>
//           </form>
//         </Form>
//       </DialogContent>
//     </Dialog>
//   );
// }
