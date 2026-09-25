# AjoConnect

A mobile-first concept prototype for **voice-first digital trade access for market women**, built for the 2026 IEEE Connecting the Unconnected Challenge. AjoConnect proposes training trusted members of existing àjọ groups as Digital Trade Guides. They demonstrate practical trade tasks, then help traders use the skills independently.

## Run the demo

Open `index.html` in a browser. For microphone access, serve the project on localhost or HTTPS, for example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. There is no build step, account, database, API key or dependency installation. Browser voice recognition is optional and browser support varies. The buttons and typed questions always work.

## What works now

- Responsive website with a simple English and Yoruba prompt switch.
- Four guided demonstration tasks: compare prices, confirm payment, find a supplier and handle suspected fraud.
- Optional browser speech input, with a typed and tap fallback.
- Clear safety guidance and an explicit demo label.
- Pilot adoption ladder: observe a guide, act independently, check continued use after 30 days.

**This is a prototype, not a deployed service.** Answers are hand-written guidance; there are no live market prices, verified identities, payment integrations, fraud alerts, accounts or collected participant data. Browser voice recognition may be processed by the browser vendor and should not be used with sensitive information. Yoruba wording and speech performance need review by native speakers in the intended market. Do not claim independent user uptake or field results until measured.

## Proposed field pilot

1. Secure the agreement of one àjọ group and market leadership; interview traders about phones, language, connectivity, costs and trust barriers.
2. Select and train two or three trusted guides with safeguarding, consent and fraud escalation procedures.
3. Test realistic tasks with traders. Record whether the guide demonstrated the task, whether the trader completed it herself, the task outcome and obstacles. Avoid collecting PINs, account details, private group chats or identifiable fraud allegations.
4. Follow up after 30 days to see whether the trader can repeat a useful task without help. Compare outcomes by device access, confidence and literacy needs.
5. Review pricing information sources, language quality and the guide workload before considering expansion.

## Development priorities

- Co-design and validate Yoruba phrasing with market women; assess voice recognition on actual devices and in noisy markets.
- Create a consent-based guide workflow and a documented method to verify time-stamped price or supplier information. Never imply prices are current without such a source.
- Test lightweight offline or low-data resources and access through shared phones.
- Add privacy-conscious pilot measurement only after the group agrees to the fields and retention period.

The core intervention is **trusted community guidance and measurable independent adoption**. The interface illustrates the experience and does not replace the field programme.

## Price comparison practice

The price practice section starts with **fictional ₦4,500 and ₦5,200 quotes** purely to demonstrate comparison. Visitors may enter their own values; the page calculates the difference locally and reminds them to confirm the unit, quality, timing and source. It does not fetch, verify, recommend or store prices. Never cite the sample figures as observed market data in the IEEE submission.

## Pilot and pitch preparation

See [PILOT_GUIDE.md](PILOT_GUIDE.md) for a guide-led session script, an anonymous evidence sheet, outcome definitions, risks and a two-minute pitch outline. It is a proposed protocol, not field results. The language switch currently changes question prompts and answers, not the whole site; Yoruba copy and speech recognition require testing with intended users.
