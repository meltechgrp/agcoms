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
//   AlertDialogTrigger,
// } from '@/components/ui/alert-dialog'
// import { Switch } from '@/components/ui/switch'
// import { useToast } from '@/components/ui/use-toast'
// import { useRouter } from 'next/navigation'
// import { toggleFeatureState } from './query'

// type Props = {
//   groupId: string
//   featureId: string
//   state: boolean
// }
// export default function FeatureToggle(props: Props) {
//   const { groupId, state, featureId } = props
//   const navigate = useRouter()
//   const { toast } = useToast()
//   return (
//     <>
//       <AlertDialog>
//         <AlertDialogTrigger asChild>
//           <div>
//             <Switch checked={state} />
//           </div>
//         </AlertDialogTrigger>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Are you sure?</AlertDialogTitle>
//             <AlertDialogDescription>
//               This action will change the state of this group feature.
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel>Cancel</AlertDialogCancel>
//             <AlertDialogAction
//               onClick={async () => {
//                 let res = await toggleFeatureState({ groupId, featureId })
//                 if (res) {
//                   toast({
//                     title: 'Feature request Info',
//                     description: 'Action has been performed.',
//                     variant: 'default',
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
