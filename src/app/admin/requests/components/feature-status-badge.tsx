// import { Badge } from '@/components/ui/badge'
// import { $Enums } from '@prisma/client'

// type Props = {
//   status: $Enums.FeatureStatus
// }
// export default function FeatureStatusBadge(props: Props) {
//   const statusMap = {
//     [$Enums.FeatureStatus.PENDING]: {
//       label: 'Pending',
//       variant: 'pending',
//     },
//     [$Enums.FeatureStatus.REJECTED]: {
//       label: 'Rejected',
//       variant: 'closed',
//     },
//     [$Enums.FeatureStatus.APPROVED]: {
//       label: 'Approved',
//       variant: 'verified',
//     },
//   }

//   const value = statusMap[props.status] as any
//   return <Badge variant={value.variant}>{value.label}</Badge>
// }
