// 'use client'
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from '@/components/ui/alert-dialog'
// import { Button } from '@/components/ui/button'
// import { $Enums } from '@prisma/client'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'
// import { useToast } from '@/components/ui/use-toast'
// import { DotsHorizontalIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
// import { Archive, CircleCheckBig, CircleOff } from 'lucide-react'
// import { useRouter } from 'next/navigation'
// import { useState } from 'react'
// import { updateRequest } from './query'

// type Props = {
//   id: string
//   edit?: boolean
// }
// export default function RequestDropdown(props: Props) {
//   const { id, edit = false } = props
//   const navigate = useRouter()
//   const { toast } = useToast()
//   const [open, setOpen] = useState(false)
//   const [actionType, setActionType] = useState<$Enums.FeatureStatus | null>(
//     null
//   )

//   const actionDescriptions = {
//     APPROVED: 'Request will be approved.',
//     REJECTED: 'Request will be rejected.',
//     PENDING: 'Request will be marked as pending.',
//   }

//   return (
//     <>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button
//             variant="outline"
//             className="flex h-10 w-10 p-0 data-[state=open]:bg-muted border-gray-30"
//           >
//             {edit ? (
//               <DotsHorizontalIcon className="h-4 w-4" />
//             ) : (
//               <DotsVerticalIcon className="h-4 w-4" />
//             )}
//             <span className="sr-only">Open menu</span>
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent align="end" className="w-[160px]">
//           <DropdownMenuLabel>Request menu</DropdownMenuLabel>
//           <DropdownMenuSeparator />
//           {!edit && (
//             <DropdownMenuItem onClick={() => navigate.push(`?requestId=${id}`)}>
//               View Request
//             </DropdownMenuItem>
//           )}
//           <DropdownMenuItem
//             onClick={() => {
//               setActionType('APPROVED')
//               setOpen(true)
//             }}
//             className="flex gap-2 items-center"
//           >
//             <CircleCheckBig size={16} />
//             Approve
//           </DropdownMenuItem>
//           <DropdownMenuItem
//             onClick={() => {
//               setActionType('PENDING')
//               setOpen(true)
//             }}
//             className="text-sm font-normal flex gap-2"
//           >
//             <Archive size={16} />
//             Pending
//           </DropdownMenuItem>
//           <DropdownMenuItem
//             onClick={() => {
//               setActionType('REJECTED')
//               setOpen(true)
//             }}
//             className="text-sm font-normal flex gap-2"
//           >
//             <CircleOff size={16} />
//             Reject
//           </DropdownMenuItem>
//         </DropdownMenuContent>
//       </DropdownMenu>
//       <AlertDialog open={open} onOpenChange={setOpen}>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//             <AlertDialogDescription>
//               {actionType ? actionDescriptions[actionType] : ''}
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction
//               onClick={async () => {
//                 setOpen(false)
//                 let res = await updateRequest(id, actionType)
//                 if (res) {
//                   toast({
//                     title: 'Feature request Info',
//                     description: 'Action has been performed.',
//                     variant:
//                       actionType === 'APPROVED' ? 'default' : 'destructive',
//                   })
//                   navigate.refresh()
//                 } else {
//                   toast({
//                     title: 'Feature request Info',
//                     description: 'Error occured.',
//                     variant: 'destructive',
//                   })
//                 }
//               }}
//             >
//               Continue
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </>
//   )
// }
