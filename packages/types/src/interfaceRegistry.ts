// Auto-generated via `yarn build:interfaces`, do not edit
/* eslint-disable @typescript-eslint/no-empty-interface */

import { Compact, Option, Vec } from './codec';
import { Bytes, Data, Fixed64, H160, H256, H512, Null, StorageData, StorageHasher, StorageKey, Text, Type, bool, i128, i16, i256, i32, i64, i8, u128, u16, u256, u32, u64, u8, usize } from './primitive';
import { AccountId, AccountIdOf, AccountIndex, Address, AssetId, Balance, BalanceOf, Block, BlockNumber, Call, Consensus, ConsensusEngineId, Digest, DigestItem, Ed25519Signature, Extrinsic, ExtrinsicEra, ExtrinsicPayload, Hash, Header, ImmortalEra, Index, Justification, KeyTypeId, KeyValue, LockIdentifier, Moment, MortalEra, Origin, Perbill, Permill, Phantom, PhantomData, PreRuntime, Seal, SealV0, Signature, SignedBlock, Sr25519Signature, ValidatorId, Weight, WeightMultiplier } from './interfaces/runtime';
import { AuthorityId } from './interfaces/consensus';
import { Keys, SessionIndex, SessionKeysPolkadot, SessionKeysSubstrate } from './interfaces/session';
import { AuthorityWeight, NextAuthority, PendingPause, PendingResume, StoredPendingChange, StoredState } from './interfaces/grandpa';
import { ApprovalFlag, SetIndex, Vote, VoteIndex, VoteThreshold, VoterInfo } from './interfaces/elections';
import { InclusionHeight, Uncle, UncleEntryItem } from './interfaces/authorship';
import { RawAuraPreDigest } from './interfaces/aura';
import { BabeWeight, RawBabePreDigest, SlotNumber } from './interfaces/babe';
import { RawAuraBorosPreDigest } from './interfaces/abrs';
import { BalanceLock, VestingSchedule, WithdrawReasons } from './interfaces/balances';
import { MemberCount, ProposalIndex, Votes } from './interfaces/collective';
import { AliveContractInfo, CodeHash, ContractInfo, ContractStorageKey, Gas, PrefabWasmModule, PrefabWasmModuleReserved, Schedule, SeedOf, TombstoneContractInfo, TrieId } from './interfaces/contracts';
import { Conviction, PropIndex, Proposal, ReferendumIndex, ReferendumInfo } from './interfaces/democracy';
import { AccountInfo, Amount, AssetOf, InherentOfflineReport, LockPeriods, NewAccountOutcome, OpaqueKey, SessionKey } from './interfaces/deprecated';
import { AssetOptions, Owner, PermissionLatest, PermissionVersions, PermissionsV1 } from './interfaces/genericAsset';
import { AuthIndex, AuthoritySignature, Heartbeat, OpaqueMultiaddr, OpaqueNetworkState, OpaquePeerId } from './interfaces/imOnline';
import { EraIndex, EraRewards, Exposure, IndividualExposure, MomentOf, RewardDestination, StakingLedger, UnlockChunk, ValidatorPrefs } from './interfaces/staking';
import { DigestOf, Event, EventId, EventIndex, EventRecord, EventRecord0to76, Key, Phase } from './interfaces/system';
import { TreasuryProposal } from './interfaces/treasury';
import { EcdsaSignature, EthereumAddress } from './interfaces/claims';
import { AttestedCandidate, AuctionIndex, BalanceUpload, Bidder, CandidateReceipt, CollatorSignature, EgressQueueRoot, HeadData, IncomingParachain, IncomingParachainDeploy, IncomingParachainFixed, LeasePeriod, LeasePeriodOf, NewBidder, ParaId, ParaIdOf, ParachainDispatchOrigin, SlotRange, SubId, UpwardMessage, ValidatorIndex, ValidityAttestation, ValidityVote, WinningData, WinningDataEntry } from './interfaces/parachains';
import { BlockAttestations, IncludedBlocks, MoreAttestations } from './interfaces/attestations';
import { ApiId, ChainProperties, ExtrinsicOrHash, ExtrinsicStatus, Health, KeyValueOption, NetworkState, PeerInfo, RuntimeVersion, RuntimeVersionApi, StorageChangeSet } from './interfaces/rpc';

export interface InterfaceRegistry {
  bool: bool;
  'Option<bool>': Option<bool>;
  'Vec<bool>': Vec<bool>;
  Bytes: Bytes;
  'Option<Bytes>': Option<Bytes>;
  'Vec<Bytes>': Vec<Bytes>;
  Data: Data;
  'Option<Data>': Option<Data>;
  'Vec<Data>': Vec<Data>;
  H160: H160;
  'Option<H160>': Option<H160>;
  'Vec<H160>': Vec<H160>;
  H256: H256;
  'Option<H256>': Option<H256>;
  'Vec<H256>': Vec<H256>;
  H512: H512;
  'Option<H512>': Option<H512>;
  'Vec<H512>': Vec<H512>;
  i8: i8;
  'Option<i8>': Option<i8>;
  'Vec<i8>': Vec<i8>;
  i16: i16;
  'Option<i16>': Option<i16>;
  'Vec<i16>': Vec<i16>;
  i32: i32;
  'Option<i32>': Option<i32>;
  'Vec<i32>': Vec<i32>;
  i64: i64;
  'Option<i64>': Option<i64>;
  'Vec<i64>': Vec<i64>;
  Fixed64: Fixed64;
  'Option<Fixed64>': Option<Fixed64>;
  'Vec<Fixed64>': Vec<Fixed64>;
  i128: i128;
  'Option<i128>': Option<i128>;
  'Vec<i128>': Vec<i128>;
  i256: i256;
  'Option<i256>': Option<i256>;
  'Vec<i256>': Vec<i256>;
  Null: Null;
  'Option<Null>': Option<Null>;
  'Vec<Null>': Vec<Null>;
  StorageData: StorageData;
  'Option<StorageData>': Option<StorageData>;
  'Vec<StorageData>': Vec<StorageData>;
  StorageHasher: StorageHasher;
  'Option<StorageHasher>': Option<StorageHasher>;
  'Vec<StorageHasher>': Vec<StorageHasher>;
  StorageKey: StorageKey;
  'Option<StorageKey>': Option<StorageKey>;
  'Vec<StorageKey>': Vec<StorageKey>;
  Text: Text;
  'Option<Text>': Option<Text>;
  'Vec<Text>': Vec<Text>;
  Type: Type;
  'Option<Type>': Option<Type>;
  'Vec<Type>': Vec<Type>;
  u8: u8;
  'Compact<u8>': Compact<u8>;
  'Option<u8>': Option<u8>;
  'Vec<u8>': Vec<u8>;
  u16: u16;
  'Compact<u16>': Compact<u16>;
  'Option<u16>': Option<u16>;
  'Vec<u16>': Vec<u16>;
  u32: u32;
  'Compact<u32>': Compact<u32>;
  'Option<u32>': Option<u32>;
  'Vec<u32>': Vec<u32>;
  u64: u64;
  'Compact<u64>': Compact<u64>;
  'Option<u64>': Option<u64>;
  'Vec<u64>': Vec<u64>;
  u128: u128;
  'Compact<u128>': Compact<u128>;
  'Option<u128>': Option<u128>;
  'Vec<u128>': Vec<u128>;
  u256: u256;
  'Compact<u256>': Compact<u256>;
  'Option<u256>': Option<u256>;
  'Vec<u256>': Vec<u256>;
  usize: usize;
  'Compact<usize>': Compact<usize>;
  'Option<usize>': Option<usize>;
  'Vec<usize>': Vec<usize>;
  AccountId: AccountId;
  'Option<AccountId>': Option<AccountId>;
  'Vec<AccountId>': Vec<AccountId>;
  AccountIdOf: AccountIdOf;
  'Option<AccountIdOf>': Option<AccountIdOf>;
  'Vec<AccountIdOf>': Vec<AccountIdOf>;
  AccountIndex: AccountIndex;
  'Compact<AccountIndex>': Compact<AccountIndex>;
  'Option<AccountIndex>': Option<AccountIndex>;
  'Vec<AccountIndex>': Vec<AccountIndex>;
  Address: Address;
  'Option<Address>': Option<Address>;
  'Vec<Address>': Vec<Address>;
  AssetId: AssetId;
  'Compact<AssetId>': Compact<AssetId>;
  'Option<AssetId>': Option<AssetId>;
  'Vec<AssetId>': Vec<AssetId>;
  Balance: Balance;
  'Compact<Balance>': Compact<Balance>;
  'Option<Balance>': Option<Balance>;
  'Vec<Balance>': Vec<Balance>;
  BalanceOf: BalanceOf;
  'Option<BalanceOf>': Option<BalanceOf>;
  'Vec<BalanceOf>': Vec<BalanceOf>;
  BlockNumber: BlockNumber;
  'Compact<BlockNumber>': Compact<BlockNumber>;
  'Option<BlockNumber>': Option<BlockNumber>;
  'Vec<BlockNumber>': Vec<BlockNumber>;
  Hash: Hash;
  'Option<Hash>': Option<Hash>;
  'Vec<Hash>': Vec<Hash>;
  Index: Index;
  'Compact<Index>': Compact<Index>;
  'Option<Index>': Option<Index>;
  'Vec<Index>': Vec<Index>;
  KeyTypeId: KeyTypeId;
  'Compact<KeyTypeId>': Compact<KeyTypeId>;
  'Option<KeyTypeId>': Option<KeyTypeId>;
  'Vec<KeyTypeId>': Vec<KeyTypeId>;
  LockIdentifier: LockIdentifier;
  'Option<LockIdentifier>': Option<LockIdentifier>;
  'Vec<LockIdentifier>': Vec<LockIdentifier>;
  Moment: Moment;
  'Compact<Moment>': Compact<Moment>;
  'Option<Moment>': Option<Moment>;
  'Vec<Moment>': Vec<Moment>;
  Perbill: Perbill;
  'Compact<Perbill>': Compact<Perbill>;
  'Option<Perbill>': Option<Perbill>;
  'Vec<Perbill>': Vec<Perbill>;
  Permill: Permill;
  'Compact<Permill>': Compact<Permill>;
  'Option<Permill>': Option<Permill>;
  'Vec<Permill>': Vec<Permill>;
  Phantom: Phantom;
  'Option<Phantom>': Option<Phantom>;
  'Vec<Phantom>': Vec<Phantom>;
  PhantomData: PhantomData;
  'Option<PhantomData>': Option<PhantomData>;
  'Vec<PhantomData>': Vec<PhantomData>;
  ValidatorId: ValidatorId;
  'Option<ValidatorId>': Option<ValidatorId>;
  'Vec<ValidatorId>': Vec<ValidatorId>;
  Weight: Weight;
  'Compact<Weight>': Compact<Weight>;
  'Option<Weight>': Option<Weight>;
  'Vec<Weight>': Vec<Weight>;
  WeightMultiplier: WeightMultiplier;
  'Option<WeightMultiplier>': Option<WeightMultiplier>;
  'Vec<WeightMultiplier>': Vec<WeightMultiplier>;
  KeyValue: KeyValue;
  'Option<KeyValue>': Option<KeyValue>;
  'Vec<KeyValue>': Vec<KeyValue>;
  Signature: Signature;
  'Option<Signature>': Option<Signature>;
  'Vec<Signature>': Vec<Signature>;
  Ed25519Signature: Ed25519Signature;
  'Option<Ed25519Signature>': Option<Ed25519Signature>;
  'Vec<Ed25519Signature>': Vec<Ed25519Signature>;
  Sr25519Signature: Sr25519Signature;
  'Option<Sr25519Signature>': Option<Sr25519Signature>;
  'Vec<Sr25519Signature>': Vec<Sr25519Signature>;
  Call: Call;
  'Option<Call>': Option<Call>;
  'Vec<Call>': Vec<Call>;
  Origin: Origin;
  'Option<Origin>': Option<Origin>;
  'Vec<Origin>': Vec<Origin>;
  ImmortalEra: ImmortalEra;
  'Option<ImmortalEra>': Option<ImmortalEra>;
  'Vec<ImmortalEra>': Vec<ImmortalEra>;
  MortalEra: MortalEra;
  'Option<MortalEra>': Option<MortalEra>;
  'Vec<MortalEra>': Vec<MortalEra>;
  ExtrinsicEra: ExtrinsicEra;
  'Option<ExtrinsicEra>': Option<ExtrinsicEra>;
  'Vec<ExtrinsicEra>': Vec<ExtrinsicEra>;
  ExtrinsicPayload: ExtrinsicPayload;
  'Option<ExtrinsicPayload>': Option<ExtrinsicPayload>;
  'Vec<ExtrinsicPayload>': Vec<ExtrinsicPayload>;
  Extrinsic: Extrinsic;
  'Option<Extrinsic>': Option<Extrinsic>;
  'Vec<Extrinsic>': Vec<Extrinsic>;
  ConsensusEngineId: ConsensusEngineId;
  'Compact<ConsensusEngineId>': Compact<ConsensusEngineId>;
  'Option<ConsensusEngineId>': Option<ConsensusEngineId>;
  'Vec<ConsensusEngineId>': Vec<ConsensusEngineId>;
  PreRuntime: PreRuntime;
  'Option<PreRuntime>': Option<PreRuntime>;
  'Vec<PreRuntime>': Vec<PreRuntime>;
  SealV0: SealV0;
  'Option<SealV0>': Option<SealV0>;
  'Vec<SealV0>': Vec<SealV0>;
  Seal: Seal;
  'Option<Seal>': Option<Seal>;
  'Vec<Seal>': Vec<Seal>;
  Consensus: Consensus;
  'Option<Consensus>': Option<Consensus>;
  'Vec<Consensus>': Vec<Consensus>;
  DigestItem: DigestItem;
  'Option<DigestItem>': Option<DigestItem>;
  'Vec<DigestItem>': Vec<DigestItem>;
  Digest: Digest;
  'Option<Digest>': Option<Digest>;
  'Vec<Digest>': Vec<Digest>;
  Header: Header;
  'Option<Header>': Option<Header>;
  'Vec<Header>': Vec<Header>;
  Justification: Justification;
  'Option<Justification>': Option<Justification>;
  'Vec<Justification>': Vec<Justification>;
  Block: Block;
  'Option<Block>': Option<Block>;
  'Vec<Block>': Vec<Block>;
  SignedBlock: SignedBlock;
  'Option<SignedBlock>': Option<SignedBlock>;
  'Vec<SignedBlock>': Vec<SignedBlock>;
  AuthorityId: AuthorityId;
  'Option<AuthorityId>': Option<AuthorityId>;
  'Vec<AuthorityId>': Vec<AuthorityId>;
  SessionIndex: SessionIndex;
  'Compact<SessionIndex>': Compact<SessionIndex>;
  'Option<SessionIndex>': Option<SessionIndex>;
  'Vec<SessionIndex>': Vec<SessionIndex>;
  SessionKeysSubstrate: SessionKeysSubstrate;
  'Option<SessionKeysSubstrate>': Option<SessionKeysSubstrate>;
  'Vec<SessionKeysSubstrate>': Vec<SessionKeysSubstrate>;
  SessionKeysPolkadot: SessionKeysPolkadot;
  'Option<SessionKeysPolkadot>': Option<SessionKeysPolkadot>;
  'Vec<SessionKeysPolkadot>': Vec<SessionKeysPolkadot>;
  Keys: Keys;
  'Option<Keys>': Option<Keys>;
  'Vec<Keys>': Vec<Keys>;
  AuthorityWeight: AuthorityWeight;
  'Compact<AuthorityWeight>': Compact<AuthorityWeight>;
  'Option<AuthorityWeight>': Option<AuthorityWeight>;
  'Vec<AuthorityWeight>': Vec<AuthorityWeight>;
  NextAuthority: NextAuthority;
  'Option<NextAuthority>': Option<NextAuthority>;
  'Vec<NextAuthority>': Vec<NextAuthority>;
  PendingPause: PendingPause;
  'Option<PendingPause>': Option<PendingPause>;
  'Vec<PendingPause>': Vec<PendingPause>;
  PendingResume: PendingResume;
  'Option<PendingResume>': Option<PendingResume>;
  'Vec<PendingResume>': Vec<PendingResume>;
  StoredPendingChange: StoredPendingChange;
  'Option<StoredPendingChange>': Option<StoredPendingChange>;
  'Vec<StoredPendingChange>': Vec<StoredPendingChange>;
  StoredState: StoredState;
  'Option<StoredState>': Option<StoredState>;
  'Vec<StoredState>': Vec<StoredState>;
  ApprovalFlag: ApprovalFlag;
  'Compact<ApprovalFlag>': Compact<ApprovalFlag>;
  'Option<ApprovalFlag>': Option<ApprovalFlag>;
  'Vec<ApprovalFlag>': Vec<ApprovalFlag>;
  SetIndex: SetIndex;
  'Compact<SetIndex>': Compact<SetIndex>;
  'Option<SetIndex>': Option<SetIndex>;
  'Vec<SetIndex>': Vec<SetIndex>;
  Vote: Vote;
  'Option<Vote>': Option<Vote>;
  'Vec<Vote>': Vec<Vote>;
  VoteIndex: VoteIndex;
  'Compact<VoteIndex>': Compact<VoteIndex>;
  'Option<VoteIndex>': Option<VoteIndex>;
  'Vec<VoteIndex>': Vec<VoteIndex>;
  VoterInfo: VoterInfo;
  'Option<VoterInfo>': Option<VoterInfo>;
  'Vec<VoterInfo>': Vec<VoterInfo>;
  VoteThreshold: VoteThreshold;
  'Option<VoteThreshold>': Option<VoteThreshold>;
  'Vec<VoteThreshold>': Vec<VoteThreshold>;
  InclusionHeight: InclusionHeight;
  'Option<InclusionHeight>': Option<InclusionHeight>;
  'Vec<InclusionHeight>': Vec<InclusionHeight>;
  Uncle: Uncle;
  'Option<Uncle>': Option<Uncle>;
  'Vec<Uncle>': Vec<Uncle>;
  UncleEntryItem: UncleEntryItem;
  'Option<UncleEntryItem>': Option<UncleEntryItem>;
  'Vec<UncleEntryItem>': Vec<UncleEntryItem>;
  RawAuraPreDigest: RawAuraPreDigest;
  'Option<RawAuraPreDigest>': Option<RawAuraPreDigest>;
  'Vec<RawAuraPreDigest>': Vec<RawAuraPreDigest>;
  BabeWeight: BabeWeight;
  'Compact<BabeWeight>': Compact<BabeWeight>;
  'Option<BabeWeight>': Option<BabeWeight>;
  'Vec<BabeWeight>': Vec<BabeWeight>;
  SlotNumber: SlotNumber;
  'Compact<SlotNumber>': Compact<SlotNumber>;
  'Option<SlotNumber>': Option<SlotNumber>;
  'Vec<SlotNumber>': Vec<SlotNumber>;
  RawBabePreDigest: RawBabePreDigest;
  'Option<RawBabePreDigest>': Option<RawBabePreDigest>;
  'Vec<RawBabePreDigest>': Vec<RawBabePreDigest>;
  RawAuraBorosPreDigest: RawAuraBorosPreDigest;
  'Option<RawAuraBorosPreDigest>': Option<RawAuraBorosPreDigest>;
  'Vec<RawAuraBorosPreDigest>': Vec<RawAuraBorosPreDigest>;
  VestingSchedule: VestingSchedule;
  'Option<VestingSchedule>': Option<VestingSchedule>;
  'Vec<VestingSchedule>': Vec<VestingSchedule>;
  WithdrawReasons: WithdrawReasons;
  'Option<WithdrawReasons>': Option<WithdrawReasons>;
  'Vec<WithdrawReasons>': Vec<WithdrawReasons>;
  BalanceLock: BalanceLock;
  'Option<BalanceLock>': Option<BalanceLock>;
  'Vec<BalanceLock>': Vec<BalanceLock>;
  MemberCount: MemberCount;
  'Compact<MemberCount>': Compact<MemberCount>;
  'Option<MemberCount>': Option<MemberCount>;
  'Vec<MemberCount>': Vec<MemberCount>;
  ProposalIndex: ProposalIndex;
  'Compact<ProposalIndex>': Compact<ProposalIndex>;
  'Option<ProposalIndex>': Option<ProposalIndex>;
  'Vec<ProposalIndex>': Vec<ProposalIndex>;
  Votes: Votes;
  'Option<Votes>': Option<Votes>;
  'Vec<Votes>': Vec<Votes>;
  CodeHash: CodeHash;
  'Option<CodeHash>': Option<CodeHash>;
  'Vec<CodeHash>': Vec<CodeHash>;
  TrieId: TrieId;
  'Option<TrieId>': Option<TrieId>;
  'Vec<TrieId>': Vec<TrieId>;
  AliveContractInfo: AliveContractInfo;
  'Option<AliveContractInfo>': Option<AliveContractInfo>;
  'Vec<AliveContractInfo>': Vec<AliveContractInfo>;
  TombstoneContractInfo: TombstoneContractInfo;
  'Option<TombstoneContractInfo>': Option<TombstoneContractInfo>;
  'Vec<TombstoneContractInfo>': Vec<TombstoneContractInfo>;
  ContractInfo: ContractInfo;
  'Option<ContractInfo>': Option<ContractInfo>;
  'Vec<ContractInfo>': Vec<ContractInfo>;
  ContractStorageKey: ContractStorageKey;
  'Option<ContractStorageKey>': Option<ContractStorageKey>;
  'Vec<ContractStorageKey>': Vec<ContractStorageKey>;
  Gas: Gas;
  'Compact<Gas>': Compact<Gas>;
  'Option<Gas>': Option<Gas>;
  'Vec<Gas>': Vec<Gas>;
  PrefabWasmModuleReserved: PrefabWasmModuleReserved;
  'Option<PrefabWasmModuleReserved>': Option<PrefabWasmModuleReserved>;
  'Vec<PrefabWasmModuleReserved>': Vec<PrefabWasmModuleReserved>;
  PrefabWasmModule: PrefabWasmModule;
  'Option<PrefabWasmModule>': Option<PrefabWasmModule>;
  'Vec<PrefabWasmModule>': Vec<PrefabWasmModule>;
  Schedule: Schedule;
  'Option<Schedule>': Option<Schedule>;
  'Vec<Schedule>': Vec<Schedule>;
  SeedOf: SeedOf;
  'Option<SeedOf>': Option<SeedOf>;
  'Vec<SeedOf>': Vec<SeedOf>;
  Conviction: Conviction;
  'Option<Conviction>': Option<Conviction>;
  'Vec<Conviction>': Vec<Conviction>;
  PropIndex: PropIndex;
  'Compact<PropIndex>': Compact<PropIndex>;
  'Option<PropIndex>': Option<PropIndex>;
  'Vec<PropIndex>': Vec<PropIndex>;
  Proposal: Proposal;
  'Option<Proposal>': Option<Proposal>;
  'Vec<Proposal>': Vec<Proposal>;
  ReferendumIndex: ReferendumIndex;
  'Compact<ReferendumIndex>': Compact<ReferendumIndex>;
  'Option<ReferendumIndex>': Option<ReferendumIndex>;
  'Vec<ReferendumIndex>': Vec<ReferendumIndex>;
  ReferendumInfo: ReferendumInfo;
  'Option<ReferendumInfo>': Option<ReferendumInfo>;
  'Vec<ReferendumInfo>': Vec<ReferendumInfo>;
  NewAccountOutcome: NewAccountOutcome;
  'Option<NewAccountOutcome>': Option<NewAccountOutcome>;
  'Vec<NewAccountOutcome>': Vec<NewAccountOutcome>;
  Amount: Amount;
  'Option<Amount>': Option<Amount>;
  'Vec<Amount>': Vec<Amount>;
  AssetOf: AssetOf;
  'Compact<AssetOf>': Compact<AssetOf>;
  'Option<AssetOf>': Option<AssetOf>;
  'Vec<AssetOf>': Vec<AssetOf>;
  AccountInfo: AccountInfo;
  'Option<AccountInfo>': Option<AccountInfo>;
  'Vec<AccountInfo>': Vec<AccountInfo>;
  LockPeriods: LockPeriods;
  'Option<LockPeriods>': Option<LockPeriods>;
  'Vec<LockPeriods>': Vec<LockPeriods>;
  InherentOfflineReport: InherentOfflineReport;
  'Option<InherentOfflineReport>': Option<InherentOfflineReport>;
  'Vec<InherentOfflineReport>': Vec<InherentOfflineReport>;
  SessionKey: SessionKey;
  'Option<SessionKey>': Option<SessionKey>;
  'Vec<SessionKey>': Vec<SessionKey>;
  OpaqueKey: OpaqueKey;
  'Option<OpaqueKey>': Option<OpaqueKey>;
  'Vec<OpaqueKey>': Vec<OpaqueKey>;
  Owner: Owner;
  'Option<Owner>': Option<Owner>;
  'Vec<Owner>': Vec<Owner>;
  PermissionsV1: PermissionsV1;
  'Option<PermissionsV1>': Option<PermissionsV1>;
  'Vec<PermissionsV1>': Vec<PermissionsV1>;
  PermissionVersions: PermissionVersions;
  'Option<PermissionVersions>': Option<PermissionVersions>;
  'Vec<PermissionVersions>': Vec<PermissionVersions>;
  PermissionLatest: PermissionLatest;
  'Option<PermissionLatest>': Option<PermissionLatest>;
  'Vec<PermissionLatest>': Vec<PermissionLatest>;
  AssetOptions: AssetOptions;
  'Option<AssetOptions>': Option<AssetOptions>;
  'Vec<AssetOptions>': Vec<AssetOptions>;
  AuthIndex: AuthIndex;
  'Compact<AuthIndex>': Compact<AuthIndex>;
  'Option<AuthIndex>': Option<AuthIndex>;
  'Vec<AuthIndex>': Vec<AuthIndex>;
  AuthoritySignature: AuthoritySignature;
  'Option<AuthoritySignature>': Option<AuthoritySignature>;
  'Vec<AuthoritySignature>': Vec<AuthoritySignature>;
  OpaqueMultiaddr: OpaqueMultiaddr;
  'Option<OpaqueMultiaddr>': Option<OpaqueMultiaddr>;
  'Vec<OpaqueMultiaddr>': Vec<OpaqueMultiaddr>;
  OpaquePeerId: OpaquePeerId;
  'Option<OpaquePeerId>': Option<OpaquePeerId>;
  'Vec<OpaquePeerId>': Vec<OpaquePeerId>;
  OpaqueNetworkState: OpaqueNetworkState;
  'Option<OpaqueNetworkState>': Option<OpaqueNetworkState>;
  'Vec<OpaqueNetworkState>': Vec<OpaqueNetworkState>;
  Heartbeat: Heartbeat;
  'Option<Heartbeat>': Option<Heartbeat>;
  'Vec<Heartbeat>': Vec<Heartbeat>;
  EraIndex: EraIndex;
  'Compact<EraIndex>': Compact<EraIndex>;
  'Option<EraIndex>': Option<EraIndex>;
  'Vec<EraIndex>': Vec<EraIndex>;
  EraRewards: EraRewards;
  'Option<EraRewards>': Option<EraRewards>;
  'Vec<EraRewards>': Vec<EraRewards>;
  IndividualExposure: IndividualExposure;
  'Option<IndividualExposure>': Option<IndividualExposure>;
  'Vec<IndividualExposure>': Vec<IndividualExposure>;
  Exposure: Exposure;
  'Option<Exposure>': Option<Exposure>;
  'Vec<Exposure>': Vec<Exposure>;
  MomentOf: MomentOf;
  'Option<MomentOf>': Option<MomentOf>;
  'Vec<MomentOf>': Vec<MomentOf>;
  RewardDestination: RewardDestination;
  'Option<RewardDestination>': Option<RewardDestination>;
  'Vec<RewardDestination>': Vec<RewardDestination>;
  UnlockChunk: UnlockChunk;
  'Option<UnlockChunk>': Option<UnlockChunk>;
  'Vec<UnlockChunk>': Vec<UnlockChunk>;
  StakingLedger: StakingLedger;
  'Option<StakingLedger>': Option<StakingLedger>;
  'Vec<StakingLedger>': Vec<StakingLedger>;
  ValidatorPrefs: ValidatorPrefs;
  'Option<ValidatorPrefs>': Option<ValidatorPrefs>;
  'Vec<ValidatorPrefs>': Vec<ValidatorPrefs>;
  DigestOf: DigestOf;
  'Option<DigestOf>': Option<DigestOf>;
  'Vec<DigestOf>': Vec<DigestOf>;
  EventId: EventId;
  'Option<EventId>': Option<EventId>;
  'Vec<EventId>': Vec<EventId>;
  EventIndex: EventIndex;
  'Compact<EventIndex>': Compact<EventIndex>;
  'Option<EventIndex>': Option<EventIndex>;
  'Vec<EventIndex>': Vec<EventIndex>;
  Key: Key;
  'Option<Key>': Option<Key>;
  'Vec<Key>': Vec<Key>;
  Phase: Phase;
  'Option<Phase>': Option<Phase>;
  'Vec<Phase>': Vec<Phase>;
  Event: Event;
  'Option<Event>': Option<Event>;
  'Vec<Event>': Vec<Event>;
  EventRecord0to76: EventRecord0to76;
  'Option<EventRecord0to76>': Option<EventRecord0to76>;
  'Vec<EventRecord0to76>': Vec<EventRecord0to76>;
  EventRecord: EventRecord;
  'Option<EventRecord>': Option<EventRecord>;
  'Vec<EventRecord>': Vec<EventRecord>;
  TreasuryProposal: TreasuryProposal;
  'Option<TreasuryProposal>': Option<TreasuryProposal>;
  'Vec<TreasuryProposal>': Vec<TreasuryProposal>;
  EcdsaSignature: EcdsaSignature;
  'Option<EcdsaSignature>': Option<EcdsaSignature>;
  'Vec<EcdsaSignature>': Vec<EcdsaSignature>;
  EthereumAddress: EthereumAddress;
  'Option<EthereumAddress>': Option<EthereumAddress>;
  'Vec<EthereumAddress>': Vec<EthereumAddress>;
  AuctionIndex: AuctionIndex;
  'Compact<AuctionIndex>': Compact<AuctionIndex>;
  'Option<AuctionIndex>': Option<AuctionIndex>;
  'Vec<AuctionIndex>': Vec<AuctionIndex>;
  CollatorSignature: CollatorSignature;
  'Option<CollatorSignature>': Option<CollatorSignature>;
  'Vec<CollatorSignature>': Vec<CollatorSignature>;
  ValidityAttestation: ValidityAttestation;
  'Option<ValidityAttestation>': Option<ValidityAttestation>;
  'Vec<ValidityAttestation>': Vec<ValidityAttestation>;
  ParaId: ParaId;
  'Compact<ParaId>': Compact<ParaId>;
  'Option<ParaId>': Option<ParaId>;
  'Vec<ParaId>': Vec<ParaId>;
  ParaIdOf: ParaIdOf;
  'Option<ParaIdOf>': Option<ParaIdOf>;
  'Vec<ParaIdOf>': Vec<ParaIdOf>;
  ValidatorIndex: ValidatorIndex;
  'Compact<ValidatorIndex>': Compact<ValidatorIndex>;
  'Option<ValidatorIndex>': Option<ValidatorIndex>;
  'Vec<ValidatorIndex>': Vec<ValidatorIndex>;
  ValidityVote: ValidityVote;
  'Option<ValidityVote>': Option<ValidityVote>;
  'Vec<ValidityVote>': Vec<ValidityVote>;
  BalanceUpload: BalanceUpload;
  'Option<BalanceUpload>': Option<BalanceUpload>;
  'Vec<BalanceUpload>': Vec<BalanceUpload>;
  EgressQueueRoot: EgressQueueRoot;
  'Option<EgressQueueRoot>': Option<EgressQueueRoot>;
  'Vec<EgressQueueRoot>': Vec<EgressQueueRoot>;
  HeadData: HeadData;
  'Option<HeadData>': Option<HeadData>;
  'Vec<HeadData>': Vec<HeadData>;
  CandidateReceipt: CandidateReceipt;
  'Option<CandidateReceipt>': Option<CandidateReceipt>;
  'Vec<CandidateReceipt>': Vec<CandidateReceipt>;
  AttestedCandidate: AttestedCandidate;
  'Option<AttestedCandidate>': Option<AttestedCandidate>;
  'Vec<AttestedCandidate>': Vec<AttestedCandidate>;
  SubId: SubId;
  'Compact<SubId>': Compact<SubId>;
  'Option<SubId>': Option<SubId>;
  'Vec<SubId>': Vec<SubId>;
  NewBidder: NewBidder;
  'Option<NewBidder>': Option<NewBidder>;
  'Vec<NewBidder>': Vec<NewBidder>;
  Bidder: Bidder;
  'Option<Bidder>': Option<Bidder>;
  'Vec<Bidder>': Vec<Bidder>;
  IncomingParachainDeploy: IncomingParachainDeploy;
  'Option<IncomingParachainDeploy>': Option<IncomingParachainDeploy>;
  'Vec<IncomingParachainDeploy>': Vec<IncomingParachainDeploy>;
  IncomingParachainFixed: IncomingParachainFixed;
  'Option<IncomingParachainFixed>': Option<IncomingParachainFixed>;
  'Vec<IncomingParachainFixed>': Vec<IncomingParachainFixed>;
  IncomingParachain: IncomingParachain;
  'Option<IncomingParachain>': Option<IncomingParachain>;
  'Vec<IncomingParachain>': Vec<IncomingParachain>;
  LeasePeriod: LeasePeriod;
  'Option<LeasePeriod>': Option<LeasePeriod>;
  'Vec<LeasePeriod>': Vec<LeasePeriod>;
  LeasePeriodOf: LeasePeriodOf;
  'Option<LeasePeriodOf>': Option<LeasePeriodOf>;
  'Vec<LeasePeriodOf>': Vec<LeasePeriodOf>;
  ParachainDispatchOrigin: ParachainDispatchOrigin;
  'Option<ParachainDispatchOrigin>': Option<ParachainDispatchOrigin>;
  'Vec<ParachainDispatchOrigin>': Vec<ParachainDispatchOrigin>;
  SlotRange: SlotRange;
  'Option<SlotRange>': Option<SlotRange>;
  'Vec<SlotRange>': Vec<SlotRange>;
  UpwardMessage: UpwardMessage;
  'Option<UpwardMessage>': Option<UpwardMessage>;
  'Vec<UpwardMessage>': Vec<UpwardMessage>;
  WinningDataEntry: WinningDataEntry;
  'Option<WinningDataEntry>': Option<WinningDataEntry>;
  'Vec<WinningDataEntry>': Vec<WinningDataEntry>;
  WinningData: WinningData;
  'Option<WinningData>': Option<WinningData>;
  'Vec<WinningData>': Vec<WinningData>;
  BlockAttestations: BlockAttestations;
  'Option<BlockAttestations>': Option<BlockAttestations>;
  'Vec<BlockAttestations>': Vec<BlockAttestations>;
  IncludedBlocks: IncludedBlocks;
  'Option<IncludedBlocks>': Option<IncludedBlocks>;
  'Vec<IncludedBlocks>': Vec<IncludedBlocks>;
  MoreAttestations: MoreAttestations;
  'Option<MoreAttestations>': Option<MoreAttestations>;
  'Vec<MoreAttestations>': Vec<MoreAttestations>;
  ApiId: ApiId;
  'Option<ApiId>': Option<ApiId>;
  'Vec<ApiId>': Vec<ApiId>;
  ChainProperties: ChainProperties;
  'Option<ChainProperties>': Option<ChainProperties>;
  'Vec<ChainProperties>': Vec<ChainProperties>;
  ExtrinsicOrHash: ExtrinsicOrHash;
  'Option<ExtrinsicOrHash>': Option<ExtrinsicOrHash>;
  'Vec<ExtrinsicOrHash>': Vec<ExtrinsicOrHash>;
  ExtrinsicStatus: ExtrinsicStatus;
  'Option<ExtrinsicStatus>': Option<ExtrinsicStatus>;
  'Vec<ExtrinsicStatus>': Vec<ExtrinsicStatus>;
  Health: Health;
  'Option<Health>': Option<Health>;
  'Vec<Health>': Vec<Health>;
  KeyValueOption: KeyValueOption;
  'Option<KeyValueOption>': Option<KeyValueOption>;
  'Vec<KeyValueOption>': Vec<KeyValueOption>;
  NetworkState: NetworkState;
  'Option<NetworkState>': Option<NetworkState>;
  'Vec<NetworkState>': Vec<NetworkState>;
  PeerInfo: PeerInfo;
  'Option<PeerInfo>': Option<PeerInfo>;
  'Vec<PeerInfo>': Vec<PeerInfo>;
  RuntimeVersionApi: RuntimeVersionApi;
  'Option<RuntimeVersionApi>': Option<RuntimeVersionApi>;
  'Vec<RuntimeVersionApi>': Vec<RuntimeVersionApi>;
  RuntimeVersion: RuntimeVersion;
  'Option<RuntimeVersion>': Option<RuntimeVersion>;
  'Vec<RuntimeVersion>': Vec<RuntimeVersion>;
  StorageChangeSet: StorageChangeSet;
  'Option<StorageChangeSet>': Option<StorageChangeSet>;
  'Vec<StorageChangeSet>': Vec<StorageChangeSet>;
}
