## 参考にしたチュートリアルページ（英）
https://medium.com/@wesharehoodies/simple-beginner-guide-for-webpack-2-0-from-scratch-part-v-495dba627718

## How to start

```bash
npm install
```

```
npm run start
```

### 感想
reactの非同期を使うとき、redux-sagaを使わずやってみると難しかった。
はじめからreactとreduxを両方やろうとしたら以下のことが理解できなかった。

- storeをアプリ全体で管理するための手順にreducerが入っているのは、これから使うactionの分岐によってstoreに入れる驟雨性を分けるため？
- 今回のアプリにdispatchの処理は入っていない？
- containerというものは今回だけでは理解できなかった。
- react-nativeでreduxを使うときにも同じ今回と同じ構造で考えればいい？

